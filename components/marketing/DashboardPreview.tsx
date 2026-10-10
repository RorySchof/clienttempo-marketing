import { getImageProps } from "next/image";
import dashboard from "@/public/screenshots/clienttempo-dashboard.png";
import dashboardMobile from "@/public/screenshots/clienttempo-dashboard-mobile.png";

const alt =
  "The ClientTempo workspace with Realtor Reply, Showing Notes, Open House Notes, Listing Generator, and RealGPT.";

export function DashboardPreview() {
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    alt,
    src: dashboard,
    sizes: "(min-width: 1600px) 1400px, 90vw",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({ alt, src: dashboardMobile, sizes: "90vw" });

  return (
    <div className="dash-frame">
      <picture>
        <source
          media="(min-width: 720px)"
          srcSet={desktop}
          width={dashboard.width}
          height={dashboard.height}
        />
        <img {...rest} srcSet={mobile} alt={alt} />
      </picture>
    </div>
  );
}
