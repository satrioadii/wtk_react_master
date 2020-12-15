import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-blue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <CardStats
                  statSubtitle="RESULT"
                  statTitle="350,897"

                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
