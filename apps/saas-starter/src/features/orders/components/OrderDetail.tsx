"use client";
import React from "react";
import {
  Package,
  User,
  MapPin,
  ShoppingCart,
  Truck,
  ExternalLink,
  CreditCard,
  CheckCircle2,
  Clock,
  Hourglass,
  Check,
} from "lucide-react";
import type { ProcessingOrder } from "@/features/orders";
import CustomerInfo from "@/components/orders/CustomerInfo";

export type OrderDetailProps = {
  order?: ProcessingOrder | null;
};

export function OrderDetail({ order }: OrderDetailProps) {
  if (!order) {
    return <div className="text-sm text-muted-foreground">No order selected</div>;
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-black text-muted-foreground uppercase tracking-[0.2em]">
              <User size={14} />
              Customer Information
            </div>
            <CustomerInfo content={
              <>
                <p className="text-lg font-bold text-foreground">John Doe</p>
                <p className="text-sm text-muted-foreground font-medium">+66 81 234 5678</p>
                <p className="text-sm text-muted-foreground font-medium">john.doe@example.com</p>
              </>
            } />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-black text-muted-foreground uppercase tracking-[0.2em]">
              <MapPin size={14} />
              Shipping Address
            </div>

            <CustomerInfo content={
              <>
                <p className="text-sm font-bold text-foreground leading-relaxed">
                  123 Sukhumvit Road, Khlong Toei, Bangkok 10110, Thailand
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-[10px] font-black uppercase tracking-tighter border px-2 py-1 rounded">Home</span>
                  <span className="text-[11px] text-muted-foreground font-bold">Default Address</span>
                </div>
              </>
            } />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[11px] font-black text-muted-foreground uppercase tracking-[0.2em]">
              <ShoppingCart size={14} />
              Order Items ({order.items})
            </div>
            <span className="text-base font-black text-primary">Total: ฿1,250.00</span>
          </div>
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-muted/30 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Product</th>
                  <th className="px-6 py-4 text-[10px] font-black text-muted-foreground uppercase tracking-widest text-center">Qty</th>
                  <th className="px-6 py-4 text-[10px] font-black text-muted-foreground uppercase tracking-widest text-right">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {[1, 2].map((item) => (
                  <tr key={item} className="hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center shrink-0 border border-border">
                          <Package size={24} className="text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-foreground">Premium Cotton T-Shirt</p>
                          <p className="text-xs text-muted-foreground font-medium">SKU: TS-00{item}-BLK</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm font-bold text-center">1</td>
                    <td className="px-6 py-5 text-sm font-bold text-right">฿625.00</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[11px] font-black text-muted-foreground uppercase tracking-[0.2em]">
            <Truck size={14} />
            Logistics
          </div>
          <CustomerInfo content={
            <>
              <div>
                <p className="text-sm font-bold text-foreground">{order.shipping}</p>
                <p className="text-xs text-muted-foreground font-medium mt-1">Tracking: {order.trackingId}</p>
              </div>
              <button className="p-2.5 rounded-xl hover:bg-muted text-primary transition-colors border border-transparent hover:border-border">
                <ExternalLink size={18} />
              </button>
            </>
          } />
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[11px] font-black text-muted-foreground uppercase tracking-[0.2em]">
            <CreditCard size={14} />
            Payment Method
          </div>
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-foreground">Credit Card</p>
              <p className="text-xs text-muted-foreground font-medium mt-1">Paid on {order.date}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 size={20} />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2 text-[11px] font-black text-muted-foreground uppercase tracking-[0.2em]">
            <Clock size={14} />
            Order Timeline
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm space-y-8 relative">
            {[
              { status: 'Order Placed', time: order.date, active: true, desc: 'Order successfully created by customer' },
              { status: 'Payment Confirmed', time: order.date, active: true, desc: 'Payment verified via credit card' },
              { status: 'Processing', time: 'Pending', active: false, desc: 'Warehouse is preparing items' },
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 relative">
                <div className={`w-8 h-8 rounded-full border-4 z-10 shrink-0 flex items-center justify-center relative overflow-hidden ${step.active ? 'bg-card border-emerald-500/20' : 'bg-card border-muted/30 text-muted-foreground'}`}>
                  <div className={`absolute inset-0 ${step.active ? 'bg-emerald-500/10' : 'bg-muted/10'}`} />
                  <div className="relative z-20 flex items-center justify-center w-full h-full">
                    {step.active ? (
                      <div className="w-5 h-5 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                        <Check size={10} strokeWidth={4} className="text-emerald-500" />
                      </div>
                    ) : (
                      <Hourglass size={12} className="opacity-60" />
                    )}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className={`text-sm font-bold ${step.active ? 'text-foreground' : 'text-muted-foreground'}`}>{step.status}</p>
                  <p className="text-xs text-muted-foreground font-medium">{step.time}</p>
                  <p className="text-[11px] text-muted-foreground/70 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
