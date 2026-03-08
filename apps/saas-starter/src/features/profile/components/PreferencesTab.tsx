"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, TabsContent } from '@b1dx/ui';
import { Globe, Calendar } from 'lucide-react';

export interface PreferencesTabProps {
    lang: string;
    onChangeLang: (v: string) => void;
}

export const PreferencesTab: React.FC<PreferencesTabProps> = ({ lang, onChangeLang }) => {
    const { t } = useTranslation();

    return (
        <TabsContent value="preferences" className="space-y-6 mt-0">
            <Card className="border-none shadow-sm">
                <CardHeader>
                    <CardTitle>{t('profile_settings.preferences.title')}</CardTitle>
                    <CardDescription>{t('profile_settings.preferences.description')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">{t('profile_settings.preferences.language')}</label>
                            <div className="relative">
                                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                <select
                                    className="w-full h-11 pl-10 rounded-xl border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    value={lang}
                                    onChange={(e) => onChangeLang(e.target.value)}
                                >
                                    <option value="en">{t('profile_settings.preferences.language_options.en')}</option>
                                    <option value="th">{t('profile_settings.preferences.language_options.th')}</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">{t('profile_settings.preferences.timezone')}</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                <select className="w-full h-11 pl-10 rounded-xl border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                                    <option>{t('profile_settings.preferences.timezone_options.bangkok')}</option>
                                    <option>{t('profile_settings.preferences.timezone_options.london')}</option>
                                    <option>{t('profile_settings.preferences.timezone_options.pacific')}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
    );
};

export default PreferencesTab;
