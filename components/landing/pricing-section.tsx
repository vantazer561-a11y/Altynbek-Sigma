"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Джун",
    description: "Только узнал о легенде",
    price: { monthly: 0, annual: 0 },
    features: [
      "Услышал имя Altynbek",
      "Пытается не ныть",
      "Гуглит каждый баг",
      "Лицо пока круглое",
      "Боится прода",
    ],
    cta: "Начать путь",
    popular: false,
  },
  {
    name: "Сигма",
    description: "Идёт по стопам легенды",
    price: { monthly: 0, annual: 0 },
    features: [
      "Коммитит молча",
      "Челюсть квадратнеет",
      "Не ходит на стендапы",
      "Чинит прод взглядом",
      "Пьёт чёрный кофе",
      "Не объясняет код",
      "Сигма-энергия растёт",
    ],
    cta: "Залочиться",
    popular: true,
  },
  {
    name: "Легенда",
    description: "Уровень Altynbek Sigma",
    price: { monthly: null, annual: null },
    features: [
      "Всё, что умеет Сигма",
      "Бог в IT",
      "Лицо как у Моргенштерна",
      "Прод не падает никогда",
      "Имя шепчут джуны",
      "Памятник в Шымкенте",
      "Код живёт вечно",
      "Рождается раз в эпоху",
    ],
    cta: "Стать мифом",
    popular: false,
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Уровни сигмы
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Путь от джуна
            <br />
            до <span className="text-stroke">легенды</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Стать таким, как Altynbek Sigma, нельзя купить. Но пройти его путь может каждый. Молча.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center gap-4 mb-16">
          <span
            className={`text-sm transition-colors ${
              !isAnnual ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Новичок
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 bg-foreground/10 rounded-full p-1 transition-colors hover:bg-foreground/20"
          >
            <div
              className={`w-5 h-5 bg-foreground rounded-full transition-transform duration-300 ${
                isAnnual ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-sm transition-colors ${
              isAnnual ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Залочен
          </span>
          {isAnnual && (
            <span className="ml-2 px-2 py-1 bg-foreground text-primary-foreground text-xs font-mono">
              сигма-режим
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-8 lg:p-12 bg-background ${
                plan.popular ? "md:-my-4 md:py-12 lg:py-16 border-2 border-foreground" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest">
                  Путь сигмы
                </span>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl text-foreground mt-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-foreground/10">
                {plan.price.monthly !== null ? (
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-5xl lg:text-6xl text-foreground">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-muted-foreground">/навсегда</span>
                  </div>
                ) : (
                  <span className="font-display text-4xl text-foreground">Бесценно</span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                  plan.popular
                    ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Ни один уровень не требует денег — только дисциплину, молчание и квадратную челюсть.{" "}
          <a href="#" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Узнать всю легенду
          </a>
        </p>
      </div>
    </section>
  );
}
