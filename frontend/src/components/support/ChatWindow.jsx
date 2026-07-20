import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import RecommendationCard from "../ai/RecommendationCard";
import { products } from "../../data/products";

function ChatWindow({ messages, loading }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div className="h-[450px] overflow-y-auto bg-white p-6">
      <div className="space-y-6">
        {messages.map((message, index) => {
          const recommendedProducts =
            message.products
              ?.map((item) =>
                products.find((product) => product.slug === item.slug)
              )
              .filter(Boolean) || [];

          return (
            <div key={index}>
              {/* Chat Message */}
              <MessageBubble message={message} />

              {/* AI Product Recommendations */}
              {recommendedProducts.length > 0 && (
                <div className="mt-5 overflow-hidden rounded-2xl border border-orange-200 bg-orange-50">
                  {/* Header */}
                  <div className="flex items-center gap-3 border-b border-orange-200 bg-white px-5 py-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-xl text-white">
                      🎮
                    </div>

                    <div>
                      <h3 className="font-bold text-black">
                        Recommended for You
                      </h3>

                      <p className="text-sm text-gray-500">
                        Handpicked by AXIOM AI
                      </p>
                    </div>
                  </div>

                  {/* Recommendation Cards */}
                  <div className="space-y-4 p-5">
                    {recommendedProducts.map((product) => (
                      <RecommendationCard
                        key={product.slug}
                        product={product}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {loading && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md bg-gray-100 px-4 py-3 text-gray-500 shadow-sm">
              AXIOM AI is typing...
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default ChatWindow;