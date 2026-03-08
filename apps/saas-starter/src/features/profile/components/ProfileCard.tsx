"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@b1dx/ui';
import { Camera, Mail, Phone, MapPin } from 'lucide-react';

export interface ProfileCardProps {
    name?: string;
    role?: string;
    avatarUrl?: string;
    email?: string;
    phone?: string;
    location?: string;
    onCameraClick?: () => void;
}

export function ProfileCard({
    name = 'Alex Rivera',
    role = 'Warehouse Lead',
    avatarUrl,
    email,
    phone,
    location,
    onCameraClick,
}: ProfileCardProps) {
    const { t } = useTranslation();

    return (

        <Card className="overflow-hidden border-none shadow-md bg-white dark:bg-slate-900">
            <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600 relative">
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                    <div className="relative group">
                        <img
                            src={avatarUrl ?? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces'}
                            alt={name}
                            className="w-32 h-32 rounded-2xl object-cover border-4 border-white dark:border-slate-900 shadow-xl"
                        />
                        <button
                            type="button"
                            onClick={onCameraClick}
                            className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"
                        >
                            <Camera size={24} />
                        </button>
                    </div>
                </div>
            </div>
            <CardContent className="pt-16 pb-8 text-center">
                <h2 className="text-xl font-bold text-foreground">{name}</h2>
                <p className="text-sm text-muted-foreground font-medium">{role}</p>

                <div className="mt-6 flex flex-col gap-3">
                    {email ? (
                        <div className="flex items-center gap-3 text-sm text-muted-foreground px-4 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                            <Mail size={16} className="text-blue-500" />
                            <span className="truncate">{email}</span>
                        </div>
                    ) : null}

                    {phone ? (
                        <div className="flex items-center gap-3 text-sm text-muted-foreground px-4 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                            <Phone size={16} className="text-emerald-500" />
                            <span>{phone}</span>
                        </div>
                    ) : null}

                    {location ? (
                        <div className="flex items-center gap-3 text-sm text-muted-foreground px-4 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                            <MapPin size={16} className="text-rose-500" />
                            <span>{location}</span>
                        </div>
                    ) : null}
                </div>

            </CardContent>
        </Card>
    );
}

export default ProfileCard;
