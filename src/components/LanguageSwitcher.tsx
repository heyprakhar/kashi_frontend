
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'hi' ? 'hi' : 'en';

  const handleChange = (lang: string) => {
    if (lang && lang !== currentLang) {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <ToggleGroup
      type="single"
      value={currentLang}
      onValueChange={handleChange}
      className="bg-gray-100 dark:bg-gray-800 rounded-full p-1 border border-gray-200 dark:border-gray-700"
      size="sm"
    >
      <ToggleGroupItem
        value="en"
        aria-label="Switch to English"
        className="rounded-full px-4 py-1 text-xs font-bold data-[state=on]:bg-teal-600 data-[state=on]:text-white transition-colors"
      >
        EN
      </ToggleGroupItem>
      <ToggleGroupItem
        value="hi"
        aria-label="Switch to Hindi"
        className="rounded-full px-4 py-1 text-xs font-bold data-[state=on]:bg-teal-600 data-[state=on]:text-white transition-colors font-[Noto Sans Devanagari],font-sans"
      >
        हिंदी
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
