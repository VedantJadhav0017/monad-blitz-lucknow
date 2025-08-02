import React from "react";
import { Card, CardContent } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { TrendingUp, Sparkle, Package, Star, Gem } from "lucide-react";

const TrendingTokens = () => {
  const tokens = [
    { icon: <TrendingUp className="w-4 h-4 text-white" />, title: "Reef REEF", price: "< $0.01", change: "+56.4%" },
    { icon: <Sparkle className="w-4 h-4 text-white" />, title: "Treasure MAGIC", price: "$0.19", change: "+28.9%" },
    { icon: <Package className="w-4 h-4 text-white" />, title: "J BUNDLE", price: "$0.01", change: "-22.4%" },
    { icon: <Star className="w-4 h-4 text-white" />, title: "Definitive EDGE", price: "$0.22", change: "+45.7%" },
    { icon: <Gem className="w-4 h-4 text-white" />, title: "IDEX IDEX", price: "$0.03", change: "+26.2%" },
    { icon: <Gem className="w-4 h-4 text-white" />, title: "Aleph ALEPH", price: "$0.09", change: "+14.3%" },
    { icon: <TrendingUp className="w-4 h-4 text-white" />, title: "Uniswap UNI", price: "$5.50", change: "-7.1%" },
    { icon: <Sparkle className="w-4 h-4 text-white" />, title: "Chainlink LINK", price: "$7.90", change: "+6.4%" },
    { icon: <Star className="w-4 h-4 text-white" />, title: "Polygon MATIC", price: "$0.70", change: "+9.0%" },
    { icon: <Gem className="w-4 h-4 text-white" />, title: "Solana SOL", price: "$23.40", change: "-11.8%" },

    // New data
    { icon: <TrendingUp className="w-4 h-4 text-white" />, title: "Ethereum ETH", price: "$3,150", change: "+3.5%" },
    { icon: <Gem className="w-4 h-4 text-white" />, title: "Bitcoin BTC", price: "$48,600", change: "+1.8%" },
    { icon: <Sparkle className="w-4 h-4 text-white" />, title: "Cardano ADA", price: "$0.35", change: "-2.5%" },
    { icon: <Package className="w-4 h-4 text-white" />, title: "Dogecoin DOGE", price: "$0.08", change: "+4.3%" },
    { icon: <Star className="w-4 h-4 text-white" />, title: "Shiba Inu SHIB", price: "< $0.01", change: "-1.1%" },
    { icon: <Gem className="w-4 h-4 text-white" />, title: "Avalanche AVAX", price: "$32.50", change: "+12.2%" },
    { icon: <TrendingUp className="w-4 h-4 text-white" />, title: "NEAR Protocol", price: "$4.20", change: "+9.8%" },
    { icon: <Sparkle className="w-4 h-4 text-white" />, title: "Arbitrum ARB", price: "$1.15", change: "-5.2%" },
    { icon: <Star className="w-4 h-4 text-white" />, title: "Optimism OP", price: "$1.40", change: "+7.0%" },
    { icon: <Gem className="w-4 h-4 text-white" />, title: "Sui SUI", price: "$0.95", change: "+2.4%" }
  ];

  return (
    <div className="bg-black rounded-2xl p-3 shadow-xl w-full max-w-xs">
      <h2 className="text-3xl font-semibold mb-3 text-white">Trending Tokens</h2>
      <ScrollArea className="h-[500px] pr-1">
        <div className="space-y-2">
          {tokens.map((item, idx) => {
            const isNegative = item.change.startsWith("-");
            return (
              <Card
                key={idx}
                className="bg-black border border-white/10 hover:bg-[#1a1a1a] transition-all"
              >
                <CardContent className="flex items-center justify-between p-2">
                  <div className="flex items-center space-x-2">
                    {item.icon}
                    <div className="text-white">
                      <div className="text-xs font-medium">{item.title}</div>
                      <div className="text-[10px]">{item.price}</div>
                    </div>
                  </div>
                  <div
                    className={`text-xs font-semibold ${
                      isNegative ? "text-red-500" : "text-green-400"
                    }`}
                  >
                    {item.change}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TrendingTokens;
