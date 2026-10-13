import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Sparkles, Send } from 'lucide-react';
import { siteConfig } from '../siteConfig';

interface FormState {
  name: string;
  phone: string;
  service: string;
  locality: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
  locality?: string;
}

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    phone: '',
    service: 'Sofá',
    locality: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Validação estrita de número de telemóvel/telefone português (9 dígitos, tipicamente começados por 9 ou 2)
  const validatePhone = (value: string): boolean => {
    const cleaned = value.replace(/\s+/g, '').replace(/^\+351/, '');
    return /^(9[1236]\d{7}|2\d{8})$/.test(cleaned);
  };

  const validateField = (field: keyof FormState, value: string): string | undefined => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Por favor indique o seu nome.';
        if (value.trim().length < 2) return 'O nome deve ter pelo menos 2 letras.';
        return undefined;
      case 'phone':
        if (!value.trim()) return 'Por favor indique o número de telemóvel.';
        if (!validatePhone(value)) {
          return 'Insira um número português válido de 9 dígitos (ex: 912 345 678).';
        }
        return undefined;
      case 'service':
        if (!value) return 'Por favor selecione a peça a higienizar.';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name as keyof FormState, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormState, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameError = validateField('name', formData.name);
    const phoneError = validateField('phone', formData.phone);
    const serviceError = validateField('service', formData.service);

    const newErrors: FormErrors = {
      name: nameError,
      phone: phoneError,
      service: serviceError,
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      phone: true,
      service: true,
      locality: true,
    });

    if (nameError || phoneError || serviceError) {
      return;
    }

    // Montar mensagem para o WhatsApp com campos codificados
    const cleanedPhone = formData.phone.replace(/\s+/g, '');
    const localityText = formData.locality.trim() ? formData.locality.trim() : 'Margem Sul';
    const messageText = formData.message.trim() ? formData.message.trim() : 'N/A';

    const textToEncode = `Olá! Gostaria de um orçamento. Nome: ${formData.name.trim()}. Peça: ${formData.service}. Localidade: ${localityText}. Telemóvel: ${cleanedPhone}. Mensagem: ${messageText}. Vou enviar fotos a seguir.`;
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(textToEncode)}`;

    setIsSuccess(true);

    // Abrir WhatsApp na janela/separador apropriado
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-lg text-content-main border border-white/20">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-darker text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-brand-dark" />
          Resposta em minutos
        </div>
        <h3 className="text-2xl font-bold font-heading text-content-main">
          Pedir Orçamento Rápido
        </h3>
        <p className="text-content-muted text-sm mt-1">
          Preencha os dados e envie fotos no WhatsApp para valor imediato sem compromisso.
        </p>
      </div>

      {isSuccess ? (
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-center animate-fade-in">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle className="w-7 h-7 text-emerald-600" />
          </div>
          <h4 className="text-lg font-bold text-emerald-900 mb-1">
            Perfeito! O WhatsApp foi aberto.
          </h4>
          <p className="text-sm text-emerald-800 mb-4 leading-relaxed">
            Envie as fotografias da peça no WhatsApp para finalizarmos o seu orçamento sem compromisso e sem custos de deslocação.
          </p>
          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="text-xs font-semibold text-brand-dark hover:underline"
          >
            ← Preencher outro pedido
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Nome */}
          <div>
            <label htmlFor="quote-name" className="block text-sm font-semibold text-content-main mb-1.5">
              O seu nome <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <input
              id="quote-name"
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Ex.: Maria Santos"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={`w-full h-[52px] px-4 rounded-xl border transition-colors text-content-main placeholder:text-gray-400 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 ${
                errors.name
                  ? 'border-rose-500 focus:ring-rose-200'
                  : 'border-gray-300 focus:border-brand-dark focus:ring-brand-dark/20'
              }`}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Telemóvel */}
          <div>
            <label htmlFor="quote-phone" className="block text-sm font-semibold text-content-main mb-1.5">
              Telemóvel <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <input
              id="quote-phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              placeholder="Ex.: 912 345 678"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className={`w-full h-[52px] px-4 rounded-xl border transition-colors text-content-main placeholder:text-gray-400 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 ${
                errors.phone
                  ? 'border-rose-500 focus:ring-rose-200'
                  : 'border-gray-300 focus:border-brand-dark focus:ring-brand-dark/20'
              }`}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* O que quer higienizar */}
          <div>
            <label htmlFor="quote-service" className="block text-sm font-semibold text-content-main mb-1.5">
              O que quer higienizar? <span className="text-rose-600" aria-hidden="true">*</span>
            </label>
            <div className="relative">
              <select
                id="quote-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-required="true"
                className="w-full h-[52px] px-4 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white text-content-main appearance-none focus:outline-none focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/20 pr-10 font-medium"
              >
                <option value="Sofá">Sofá</option>
                <option value="Colchão">Colchão</option>
                <option value="Tapete">Tapete</option>
                <option value="Estofos de automóvel">Estofos de automóvel</option>
                <option value="Várias peças">Várias peças</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-content-muted">
                ▼
              </div>
            </div>
          </div>

          {/* Localidade */}
          <div>
            <label htmlFor="quote-locality" className="block text-sm font-semibold text-content-main mb-1.5">
              Localidade (Margem Sul)
            </label>
            <input
              id="quote-locality"
              type="text"
              name="locality"
              placeholder="Ex.: Almada, Corroios, Barreiro..."
              value={formData.locality}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full h-[52px] px-4 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white text-content-main placeholder:text-gray-400 focus:outline-none focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/20"
            />
          </div>

          {/* Mensagem Opcional */}
          <div>
            <label htmlFor="quote-message" className="block text-sm font-semibold text-content-main mb-1.5">
              Detalhes adicionais (opcional)
            </label>
            <textarea
              id="quote-message"
              name="message"
              rows={2}
              placeholder="Ex.: Sofá de 3 lugares em tecido, com nódoas de café, e um colchão de casal"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white text-content-main placeholder:text-gray-400 text-sm focus:outline-none focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/20 resize-none"
            />
          </div>

          {/* Nota Obrigatória de fotos */}
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80 flex items-start gap-2.5">
            <span className="text-xl shrink-0" role="img" aria-label="Câmara fotográfica">📷</span>
            <p className="text-xs text-amber-900 leading-relaxed font-medium">
              No WhatsApp, anexe 1 ou 2 fotos da peça para recebermos o orçamento mais depressa.
            </p>
          </div>

          {/* Botão de Envio WhatsApp */}
          <button
            type="submit"
            className="w-full min-h-[56px] px-6 rounded-xl bg-whatsapp hover:bg-[#20bd5a] text-content-main font-bold text-lg shadow-cta hover:shadow-lg transition-all flex items-center justify-center gap-3 active:scale-[0.99] cursor-pointer"
          >
            <Send className="w-5 h-5 text-content-main" />
            <span>Enviar pedido no WhatsApp</span>
          </button>

          {/* Confiança */}
          <p className="text-center text-xs font-semibold text-content-muted flex items-center justify-center gap-1.5 pt-1">
            <span>🔒 Sem compromisso.</span>
            <span>•</span>
            <span className="text-emerald-700">Deslocação grátis.</span>
          </p>
        </form>
      )}
    </div>
  );
};
