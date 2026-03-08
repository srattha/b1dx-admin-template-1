'use client';
import React from 'react';
import { MOCK_ORDERS } from '@/features/orders';
import { OrderDetail } from '@/features/orders';
import { Badge, ExportExcelButton, AppPageHeader, PrintButton } from '@b1dx/ui';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

export default function OrderDetailPage({ params }: any) {
    const resolvedParams = typeof React.use === 'function' ? (React as any).use(params) : params;
    const orderId = Array.isArray(resolvedParams?.id) ? resolvedParams.id[0] : resolvedParams?.id ?? undefined;
    const order = orderId ? MOCK_ORDERS.find((o) => o.orderId === orderId) : null;
    const { t } = useTranslation();
    const router = useRouter();
    return (
        <div className="space-y-6">
            <AppPageHeader
                title={
                    orderId ? (
                        <>
                            <span>{`Order #${orderId}`}</span>
                            {order?.statusKey && (
                                <Badge className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-full ml-3">
                                    {order.statusKey.replace('status.', '').replace('_', ' ')}
                                </Badge>
                            )}
                        </>
                    ) : (
                        'Order Details'
                    )
                }
                description={`Placed on ${order?.date || 'N/A'}`}
                showBackButton
                onBack={() => router.back()}
                backLabel={t('common.back')}
                backAriaLabel={t('common.back')}
                actions={
                    <div className="flex items-center gap-2">
                        <PrintButton>{'print'}</PrintButton>
                        <ExportExcelButton>{t('common.export_excel')}</ExportExcelButton>
                    </div>
                }
            />
            <OrderDetail order={order} />
        </div>
    );
}
