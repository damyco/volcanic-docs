import Link from "next/link";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
  ssr: false,
});

export default function Header() {
  return (
    <div className="p-5 sticky top-0 z-40 border-b border-slate-900/10 dark:bg-gray-900/90 dark:border-b dark:border-slate-700 w-full backdrop-blur  bg-white/70 supports-backdrop-blur:bg-white/90 ">
      <div className="flex items-center ">
        <Link href="/">
          <a aria-label="Reed logo - back to home">
            <svg
              className="fill-[#081351] dark:fill-sky-400"
              xmlns="http://www.w3.org/2000/svg"
              width="84"
              height="44"
              viewBox="0 0 168.809 88.593"
            >
              <g id="Group_21" clipPath="url(#clip-path)">
                <path
                  id="Path_5"
                  d="M42.064,57.2c-4.847,0-9.309-.01-13.771.008-.8,0-1.08-.5-1.39-1.089q-4.288-8.1-8.6-16.193c-.806-1.518-1.594-3.046-2.386-4.571a1.413,1.413,0,0,0-2.1-.747V57.072H.335C-.049,55.617-.136,4.64.248,2.479c.46-.042.953-.125,1.447-.125,7.339-.009,14.681-.138,22.016.038C29,2.517,33.883,4.006,37.7,8a13.932,13.932,0,0,1,3.81,8.357c.911,8.408-3.767,14.046-10.422,16.486-.535.2-1.066.4-1.861.7.3.625.556,1.233.874,1.807q5.6,10.1,11.221,20.193c.234.421.4.881.742,1.649M13.9,24c3.132,0,6.064.159,8.969-.045a5.2,5.2,0,0,0,4.98-5.111c.154-3.227-1.317-5.235-4.421-5.966a9.885,9.885,0,0,0-2.076-.255c-1.977-.033-3.955-.021-5.932,0a15.057,15.057,0,0,0-1.52.167ZM166.889,57.113H155.78l-.471-2.155c-5.794,3.089-11.744,3.78-17.894,1.506a19.573,19.573,0,0,1-9.771-7.926A20.293,20.293,0,0,1,129.361,24.4a19.7,19.7,0,0,1,12.1-6.723c3.412-.525,6.774-.864,13.71,2.495.6-.551.348-1.295.352-1.942.026-4.909.016-9.818.017-14.728V1.267L166.725,0c.058.79.157,1.508.158,2.226q.016,13.2.006,26.4,0,13.007,0,26.013ZM144.715,28.63a8.894,8.894,0,0,0-9.071,8.845,9.1,9.1,0,0,0,8.954,9.231,9.228,9.228,0,0,0,9.138-9.112,9.043,9.043,0,0,0-9.021-8.964M121.777,40.393H94.23A7.526,7.526,0,0,0,99.769,47.3a8.431,8.431,0,0,0,9.553-2.926H121.4a9.782,9.782,0,0,1-1.815,4.584,18.42,18.42,0,0,1-13.5,8.395,21.357,21.357,0,0,1-13.877-2.276A18.9,18.9,0,0,1,82.194,39.335a19.811,19.811,0,0,1,5.147-15.491,18.919,18.919,0,0,1,12.547-6.2c9.431-.961,17.409,3.934,20.771,12.3a18.9,18.9,0,0,1,1.117,10.448m-12.194-7.646c-.288-3.058-4.069-6.07-8.028-5.752-3.487.28-6.5,2.7-6.9,5.752Zm11.5,46.363a9.445,9.445,0,1,0,18.889.042c.04-5.181-4.574-9.678-9.334-9.306-5.331-.405-9.531,4.4-9.555,9.263m28.826.026a9.447,9.447,0,1,0,18.895,0c0-5.742-5.05-9.682-9.355-9.286-4.864-.459-9.622,4.092-9.54,9.29m-57.7-.013a9.459,9.459,0,1,0,18.918.019c.011-5.4-4.623-9.642-9.336-9.3-4.127-.4-9.35,2.826-9.582,9.277M79.843,40.393H52.3A7.526,7.526,0,0,0,57.835,47.3a8.431,8.431,0,0,0,9.553-2.926h12.08a9.782,9.782,0,0,1-1.815,4.584,18.42,18.42,0,0,1-13.5,8.395,21.358,21.358,0,0,1-13.877-2.276A18.9,18.9,0,0,1,40.26,39.335a19.811,19.811,0,0,1,5.147-15.491,18.919,18.919,0,0,1,12.547-6.2c9.431-.961,17.409,3.934,20.771,12.3a18.9,18.9,0,0,1,1.117,10.448M67.649,32.747c-.288-3.058-4.069-6.07-8.028-5.752-3.487.28-6.5,2.7-6.9,5.752Z"
                  transform="translate(0)"
                />
              </g>
            </svg>
          </a>
        </Link>
        <p className="select-none pl-10 text-lg font-semibold text-gray-500 dark:text-gray-200">
          Volcanic CMS user guide
        </p>

        <ThemeToggle />
      </div>
    </div>
  );
}
