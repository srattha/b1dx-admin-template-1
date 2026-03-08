"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    Input,
    Button,
    TabsContent,
} from '@b1dx/ui';
import { User, Mail, Phone, Briefcase, RefreshCw } from 'lucide-react';

export interface GeneralTabProps {
    handleSave: () => void;
    isSaving: boolean;
}

const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({ children, ...props }) => (
    <label {...props} className={['text-sm font-medium text-foreground', props.className].filter(Boolean).join(' ')}>
        {children}
    </label>
);

export const GeneralTab: React.FC<GeneralTabProps> = ({ handleSave, isSaving }) => {
    const { t } = useTranslation();

    return (
        <TabsContent value="general" className="space-y-6 mt-0">
            <Card className="border-none shadow-sm">
                <CardHeader>
                    <CardTitle>{t('profile_settings.personal.title')}</CardTitle>
                    <CardDescription>{t('profile_settings.personal.description')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="fullName">{t('profile_settings.fields.full_name')}</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                <Input id="fullName" defaultValue="Alex Rivera" className="pl-10 h-11" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">{t('profile_settings.fields.email')}</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                <Input id="email" type="email" defaultValue="alex.rivera@oms-admin.com" className="pl-10 h-11" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">{t('profile_settings.fields.phone')}</Label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                <Input id="phone" defaultValue="+1 (555) 012-3456" className="pl-10 h-11" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="department">{t('profile_settings.fields.department')}</Label>
                            <div className="relative">
                                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                <Input id="department" defaultValue="Logistics & Fulfillment" className="pl-10 h-11 bg-slate-50" disabled />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="bio">{t('profile_settings.fields.bio')}</Label>
                        <textarea
                            id="bio"
                            className="w-full min-h-[100px] rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder={t('profile_settings.fields.bio_placeholder')}
                            defaultValue={'Passionate about logistics and warehouse optimization. Leading the team to excellence since 2023.'}
                        />
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-end gap-4">
                <Button variant="outline" className="h-11 px-8 font-bold">{t('profile_settings.actions.cancel') ?? 'Cancel'}</Button>
                <Button onClick={handleSave} disabled={isSaving} className="h-11 px-10 font-bold bg-blue-600 hover:bg-blue-700">
                    {isSaving ? (
                        <>
                            <RefreshCw size={16} className="mr-2 animate-spin" />
                            {t('profile_settings.actions.saving') ?? 'Saving...'}
                        </>
                    ) : (
                        t('profile_settings.actions.save') ?? 'Save Changes'
                    )}
                </Button>
            </div>
        </TabsContent>
    );
};

export default GeneralTab;
