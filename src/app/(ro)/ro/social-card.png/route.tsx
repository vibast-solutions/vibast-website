import { renderSocialImage } from "@/seo/socialImage";

// The Romanian social card. A route handler rather than an opengraph-image file:
// inside a route group Next adds a hash to the file-convention URL, and the
// metadata helper needs a stable one (SOCIAL_IMAGE_PATH.ro).
export const dynamic = "force-static";

export function GET() {
  return renderSocialImage("ro");
}
