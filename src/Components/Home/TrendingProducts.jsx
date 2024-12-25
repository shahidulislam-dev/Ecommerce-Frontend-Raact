import React from "react";
import TrendChairImg from "../../assets/trendChairImg.png";
import TrendChairImg1 from "../../assets/trendChairImg1.png";
import TrendChairImg2 from "../../assets/trendChairImg2.png";
import TrendChairImg3 from "../../assets/trendChairImg3.png";
import TrendChairImg4 from "../../assets/trendChairImg4.png";
import BlackClockImg from "../../assets/blackClock.png";
import DrawerImg from "../../assets/drawer.png";

const TrendingProducts = () => {
  return (
    <section className="mt-32">
      <div className="container mx-auto">
        <div className="pb-10">
          <h3 className="font-josef font-bold text-[42px] text-[#1A0B5B] text-center">
            Trending Products
          </h3>
          <div className="flex items-center justify-between pt-12">
            <div className="shadow-lg p-3 w-[23%]">
              <div className="py-10 bg-[#F5F6F8] flex justify-center">
                <img
                  src={TrendChairImg}
                  alt="Trending Products Image"
                  className="w-48 h-48"
                />
              </div>
              <h4 className="font-lato font-semibold text-[16px] text-secondery pt-4 text-center">
                Cantilever chair
              </h4>
              <div className="flex items-center gap-5 pt-2 pb-8 justify-center">
                <p className="font-josef font-[400px] text-secondery text-[14px]">
                  $26.00
                </p>
                <p className="font-josef font-[400px] text-[#ACABC3] text-[12px]">
                  $42.00
                </p>
              </div>
            </div>
            <div className="shadow-lg p-3 w-[23%]">
              <div className="py-10 bg-[#F5F6F8] flex justify-center">
                <img
                  src={TrendChairImg1}
                  alt="Trending Products Image"
                  className="w-48 h-48"
                />
              </div>
              <h4 className="font-lato font-semibold text-[16px] text-secondery pt-4 text-center">
                Cantilever chair
              </h4>
              <div className="flex items-center gap-5 pt-2 pb-8 justify-center">
                <p className="font-josef font-[400px] text-secondery text-[14px]">
                  $26.00
                </p>
                <p className="font-josef font-[400px] text-[#ACABC3] text-[12px]">
                  $42.00
                </p>
              </div>
            </div>
            <div className="shadow-lg p-3 w-[23%]">
              <div className="py-10 bg-[#F5F6F8] flex justify-center">
                <img
                  src={TrendChairImg2}
                  alt="Trending Products Image"
                  className="w-48 h-48"
                />
              </div>
              <h4 className="font-lato font-semibold text-[16px] text-secondery pt-4 text-center">
                Cantilever chair
              </h4>
              <div className="flex items-center gap-5 pt-2 pb-8 justify-center">
                <p className="font-josef font-[400px] text-secondery text-[14px]">
                  $26.00
                </p>
                <p className="font-josef font-[400px] text-[#ACABC3] text-[12px]">
                  $42.00
                </p>
              </div>
            </div>
            <div className="shadow-lg p-3 w-[23%]">
              <div className="py-10 bg-[#F5F6F8] flex justify-center">
                <img
                  src={TrendChairImg3}
                  alt="Trending Products Image"
                  className="w-48 h-48"
                />
              </div>
              <h4 className="font-lato font-semibold text-[16px] text-secondery pt-4 text-center">
                Cantilever chair
              </h4>
              <div className="flex items-center gap-5 pt-2 pb-8 justify-center">
                <p className="font-josef font-[400px] text-secondery text-[14px]">
                  $26.00
                </p>
                <p className="font-josef font-[400px] text-[#ACABC3] text-[12px]">
                  $42.00
                </p>
              </div>
            </div>
          </div>

          <div className="pt-10 flex items-center justify-between">
            <div className="bg-[#FFF6FB] w-[38%] p-5">
              <h2 className="font-josef font-semibold text-secondery text-[26px]">
                23% off in all products
              </h2>
              <div className="flex justify-between">
                <p className="font-lato font-semibold text-primary text-[16px] underline">
                  Shop Now
                </p>
                <img
                  src={BlackClockImg}
                  alt="Trending Product Black Clock Image"
                />
              </div>
            </div>
            <div className="bg-[#EEEFFB] w-[38%] p-6">
              <h2 className="font-josef font-semibold text-secondery text-[26px]">
                23% off in all products
              </h2>
              <p className="font-lato font-semibold text-primary text-[16px] underline">
                View Collection
              </p>
              <img
                src={DrawerImg}
                alt="Trending Product Drawer Image"
                className="pl-28"
              />
            </div>
            <div className="space-y-8 w-[20%]">
              <div className="flex items-center gap-5">
                <div className="bg-[#F5F6F8] px-5">
                  <img src={TrendChairImg4} alt="Trending Products Image" />
                </div>
                <div className="">
                  <h2 className="font-josef text-[16px] text-secondery">
                    Executive Seat chair
                  </h2>
                  <p className="font-josef text-[12px] text-secondery">$32.00</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="bg-[#F5F6F8] px-5">
                  <img src={TrendChairImg4} alt="Trending Products Image" />
                </div>
                <div className="">
                  <h2 className="font-josef text-[16px] text-secondery">
                    Executive Seat chair
                  </h2>
                  <p className="font-josef text-[12px] text-secondery">$32.00</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="bg-[#F5F6F8] px-5">
                  <img src={TrendChairImg4} alt="Trending Products Image" />
                </div>
                <div className="">
                  <h2 className="font-josef text-[16px] text-secondery">
                    Executive Seat chair
                  </h2>
                  <p className="font-josef text-[12px] text-secondery">$32.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;