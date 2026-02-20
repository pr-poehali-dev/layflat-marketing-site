import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import Icon from "@/components/ui/icon";
import { categories } from "@/data/catalog";

interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  productType: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  company: "",
  productType: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, productType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки
    console.log("Form submitted:", formData);

    await new Promise((resolve) => setTimeout(resolve, 800));

    toast({
      title: "Запрос отправлен",
      description:
        "Спасибо за обращение! Наш менеджер свяжется с вами в ближайшее время.",
    });

    setFormData(initialFormData);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Имя и Телефон */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="font-body text-sm font-medium">
            Имя <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Ваше имя"
            required
            value={formData.name}
            onChange={handleChange}
            className="font-body"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="font-body text-sm font-medium">
            Телефон <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+7 (___) ___-__-__"
            required
            value={formData.phone}
            onChange={handleChange}
            className="font-body"
          />
        </div>
      </div>

      {/* Email и Компания */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="font-body text-sm font-medium">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email@company.ru"
            value={formData.email}
            onChange={handleChange}
            className="font-body"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company" className="font-body text-sm font-medium">
            Компания
          </Label>
          <Input
            id="company"
            name="company"
            placeholder="Название компании"
            value={formData.company}
            onChange={handleChange}
            className="font-body"
          />
        </div>
      </div>

      {/* Тип продукции */}
      <div className="space-y-2">
        <Label className="font-body text-sm font-medium">Тип продукции</Label>
        <Select value={formData.productType} onValueChange={handleSelectChange}>
          <SelectTrigger className="font-body">
            <SelectValue placeholder="Выберите категорию продукции" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.slug} className="font-body">
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Сообщение */}
      <div className="space-y-2">
        <Label htmlFor="message" className="font-body text-sm font-medium">
          Сообщение
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Опишите вашу задачу: требуемый диаметр, давление, транспортируемая среда, объём..."
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="font-body resize-none"
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-heading uppercase tracking-wide text-sm px-8 py-2.5"
      >
        {isSubmitting ? (
          <>
            <Icon name="Loader2" size={18} className="animate-spin mr-2" />
            Отправка...
          </>
        ) : (
          <>
            <Icon name="Send" size={18} className="mr-2" />
            Отправить запрос
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
