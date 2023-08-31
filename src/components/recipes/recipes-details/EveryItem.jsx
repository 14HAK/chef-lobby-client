import { Link } from 'react-router-dom';

const EveryItem = ({ item }) => {
  // console.log(item);
  return (
    <>
      <div className='w-full'>
        <div className='h-full bg-gray-50 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
          <img
            className='lg:h-48 md:h-36 w-full object-cover object-center'
            src={item?.chef_img}
            alt='blog'
          />
          <div className='p-6'>
            <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
              CHEF-EXPERIENCE: {item?.experience}+
            </h2>
            <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
              {item?.chef_name}
            </h1>
            <p className='leading-relaxed mb-3'>
              {item?.short_details_chef.slice(0, 80)}...
            </p>
            <div className='flex items-center flex-wrap'>
              <Link
                to={`/every-recipe/${item?.id}`}
                className='text-indigo-500 hover:text-indigo-800 hover:underline inline-flex items-center md:mb-2 lg:mb-0'
              >
                View Recipes
                <svg
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M5 12h14'></path>
                  <path d='M12 5l7 7-7 7'></path>
                </svg>
              </Link>
              <span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                <svg
                  version='1.0'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 200.000000 200.000000'
                  preserveAspectRatio='xMidYMid meet'
                >
                  <g
                    transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
                    fill='#3b3b3b'
                    stroke='none'
                  >
                    <path
                      d='M1077 1690 c-54 -16 -57 -24 -57 -136 l0 -104 -91 -144 -91 -145 -50
-3 c-58 -3 -81 -25 -62 -55 9 -15 26 -18 85 -18 l73 0 107 170 108 170 0 98
c1 89 3 97 20 97 81 0 113 -61 119 -223 4 -109 3 -123 -19 -169 -39 -82 -39
-82 219 -88 199 -5 222 -7 241 -24 23 -21 51 -102 51 -147 0 -15 -41 -139 -90
-276 -67 -182 -98 -254 -116 -271 l-26 -23 -303 3 c-289 3 -305 4 -332 24 -15
11 -37 38 -48 60 -11 21 -24 42 -30 46 -19 14 -44 8 -55 -12 -14 -27 15 -93
60 -137 60 -58 91 -63 414 -63 326 0 349 5 398 71 36 49 208 525 208 576 0
105 -60 215 -133 242 -16 6 -104 11 -204 11 -154 0 -174 2 -163 15 9 11 11 53
8 152 -3 116 -8 146 -26 188 -29 63 -48 83 -97 106 -43 20 -74 22 -118 9z
m213 -485 c10 -12 9 -16 -5 -21 -19 -8 -40 9 -31 25 10 15 21 14 36 -4z'
                    />
                    <path
                      d='M209 1191 l-29 -29 0 -362 0 -362 29 -29 29 -29 182 0 182 0 29 29
29 29 0 362 0 362 -29 29 -29 29 -182 0 -182 0 -29 -29z m371 -391 l0 -340
-160 0 -160 0 0 340 0 340 160 0 160 0 0 -340z'
                    />
                    <path
                      d='M365 675 c-16 -15 -25 -36 -25 -55 0 -19 9 -40 25 -55 15 -16 36 -25
55 -25 19 0 40 9 55 25 50 49 15 135 -55 135 -19 0 -40 -9 -55 -25z m83 -58
c-2 -16 -10 -22 -28 -22 -28 0 -39 27 -20 50 18 21 52 1 48 -28z'
                    />
                  </g>
                </svg>

                <small className='text-[3b3b3b] ps-1'>{item?.likes}k</small>
              </span>
              <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                <svg
                  version='1.0'
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  viewBox='0 0 300.000000 300.000000'
                  preserveAspectRatio='xMidYMid meet'
                >
                  <g
                    transform='translate(0.000000,300.000000) scale(0.100000,-0.100000)'
                    fill='#3b3b3b'
                    stroke='none'
                  >
                    <path
                      d='M1017 2145 c-22 -7 -50 -24 -64 -37 -53 -48 -53 -48 -53 -602 0 -340
4 -524 11 -543 14 -38 46 -71 94 -96 39 -22 47 -22 565 -22 l525 0 3 536 2
536 -71 122 -71 121 -452 0 c-356 -1 -459 -4 -489 -15z m903 -505 l0 -460
-413 0 c-434 0 -482 -4 -528 -46 -10 -9 -19 -13 -19 -8 0 5 0 209 0 454 0 416
1 447 19 470 36 50 37 50 504 50 l437 0 0 -460z m120 -235 l1 -506 -492 1
c-337 0 -498 4 -512 11 -74 38 -97 101 -56 153 40 51 34 51 524 56 l460 5 3
455 2 455 35 -62 35 -63 0 -505z'
                    />
                    <path
                      d='M1553 1960 c-13 -5 -32 -24 -43 -42 -44 -72 -33 -178 23 -233 l32
-30 -7 -175 c-7 -192 -3 -214 42 -190 18 10 21 18 16 43 -3 18 -9 98 -12 179
l-7 148 28 22 c74 58 74 208 0 266 -30 24 -39 25 -72 12z m63 -61 c14 -16 19
-36 19 -85 0 -56 -3 -67 -27 -91 -27 -26 -28 -26 -48 -8 -44 39 -48 141 -9
184 25 27 41 26 65 0z'
                    />
                    <path
                      d='M1230 1882 c0 -97 22 -174 57 -202 l26 -20 -6 -158 c-2 -86 -8 -164
-12 -173 -6 -16 17 -49 35 -49 18 0 41 33 35 49 -4 9 -9 86 -12 171 l-6 156
30 30 c36 35 53 102 53 204 0 56 -3 70 -15 70 -12 0 -15 -15 -15 -75 0 -60 -3
-75 -15 -75 -12 0 -15 15 -15 75 0 61 -3 75 -16 75 -13 0 -15 -12 -13 -72 2
-55 -1 -73 -11 -73 -10 0 -13 18 -11 73 2 60 0 72 -13 72 -13 0 -16 -14 -16
-75 0 -60 -3 -75 -15 -75 -12 0 -15 15 -15 75 0 60 -3 75 -15 75 -12 0 -15
-15 -15 -78z m140 -121 c0 -10 -9 -29 -20 -42 l-20 -24 -20 24 c-11 13 -20 32
-20 42 0 15 7 19 40 19 33 0 40 -4 40 -19z'
                    />
                    <path
                      d='M1172 1031 c-8 -5 -12 -17 -10 -27 3 -18 20 -19 393 -19 l390 0 0 25
0 25 -380 2 c-209 2 -386 -1 -393 -6z'
                    />
                  </g>
                </svg>
                {item?.numbers_of_recipes} recipes
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EveryItem;
