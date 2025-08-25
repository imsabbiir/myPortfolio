<div className="mt-20 ml-20 px-7 py-7 w-full overflow-y-auto">
          <Scrollbar
            className="hide-scrollbar"
            plugins={{
              overscroll: {
                effect: "bounce",
              },
            }}
            damping={0.05}
            thumbMaxSize={20}
            renderByPixels={true}
            alwaysShowTracks={false}
            continuousScrolling={true}
          >

              {children}

          </Scrollbar>
        </div>










<div className="flex justify-between pt-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="activeText text-xl font-semibold cursor-pointer"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="activeText text-xl font-semibold cursor-pointer"
        >
          <IoIosArrowForward />
        </button>
      </div>











api path middleware not work



