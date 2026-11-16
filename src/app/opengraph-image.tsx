import { renderSocialImage } from "@/seo/socialImage";
import { SOCIAL_IMAGE_ALT, SOCIAL_IMAGE_SIZE } from "@/seo/socialImageMeta";

export const alt = SOCIAL_IMAGE_ALT.en;
export const size = SOCIAL_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderSocialImage("en");
}
