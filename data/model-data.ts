import type { ModelData } from "./types"

/**
 * ============================================================
 *  EDIT THIS FILE WHEN CREATING A NEW MODEL
 * ============================================================
 *
 * This is the single source of truth for everything about the
 * model shown on the site. No model information is hard-coded
 * inside components — change the values below and the entire
 * site updates.
 *
 * HOW TO REUSE THIS TEMPLATE FOR A NEW MODEL:
 *   1. Replace the text fields (name, title, bio, details...).
 *   2. Drop new images into /public and update the image paths.
 *   3. Update the gallery and videos arrays.
 *   4. Update the Instagram handle.
 *   5. Update company details in `data/company-data.ts`.
 *   6. Build & deploy.
 *
 * PRIVACY NOTE (junior models):
 *   Any field left as an empty string OR removed is automatically
 *   hidden from the UI. Only include information you are comfortable
 *   making public. Bookings always route through the company/agency,
 *   never directly to the model.
 */
export const modelData: ModelData = {
  name: "Kiara Matharu ",
  title: "Junior Fashion & Commercial Model",
  profileImage: "/portfolio/profile.JPG",
  heroImage: "/portfolio/hero.JPG",

  intro:
    "A young and talented junior model with a passion for fashion, commercial shoots and creative campaigns.",

  bio: "Kiara is a confident young talent with a natural presence and an interest in fashion, commercial and lifestyle shoots. Available for professional projects through agency management.",

  availability: "Available for professional bookings — enquire via the agency",

  // Optional fields left blank are automatically hidden.
  details: {
    age: "02 years" ,
    dateOfBirth: "16 Feb 2024",
    height: "",
    weight: "16 kg",
    Bust: "",
    skinTone: "Medium",
    hairColor: "Black",
    eyeColor: "Brown",
    ShoeSize: "",
    Hips: "",
    Waist: "",
    location: "Jabalpur, MP, India",
  },

  // Parent/guardian names are optional and often kept private.
  // Leave blank to hide them entirely.
  parents: {
    fatherName: "Mr. Shaan Singh Matharu",
    motherName: "Mrs. Sharanpreet Matharu",
  },

  // Instagram handle WITHOUT the @ (managed by parents/agency).
  instagram: "i_.kiara._",

  ecommerce: [
  {
    name: "Flipkart",
    url: "https://www.flipkart.com/jammer-girls-casual-t-shirt-shorts/p/itm3e254f9feb783?pid=KPBHQTHX8ZREYGQT",
    description: "Shop featured products and collections.  Jammer Girls Casual T-shirt Shorts (Black)",
  },
],

  /**
   * GALLERY — supports 10–20+ images across categories:
   * "Fashion" | "Commercial" | "Studio" | "Outdoor" | "Casual" | "Campaign"
   * Mark up to a couple of images as `featured: true` for the editorial layout.
   */
  gallery: [
     {
      src: "/portfolio/gallery-1.JPG",
      alt: "Kiara Matharu  fashion portfolio",
      category: "Fashion",
      featured: true,
    },
    {
      src: "/portfolio/gallery-2.JPG",
      alt: "Kiara Matharu  fashion portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-3.JPG",
      alt: "Kiara Matharu  studio portrait",
      category: "Studio",
    },
    {
      src: "/portfolio/gallery-4.JPG",
      alt: "Kiara Matharu  outdoor portrait",
      category: "Outdoor",
      featured: true,
    },
    {
      src: "/portfolio/gallery-5.JPG",
      alt: "Kiara Matharu  commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-6.JPG",
      alt: "Kiara Matharu  lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-7.JPG",
      alt: "Kiara Matharu  fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-8.JPG",
      alt: "Kiara Matharu  campaign portrait",
      category: "Campaign",
    },
    {
      src: "/portfolio/gallery-9.JPG",
      alt: "Kiara Matharu  editorial portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/hero.JPG",
      alt: "Kiara Matharu  hero portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/profile.JPG",
      alt: "Kiara Matharu  profile portrait",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-10.JPG",
      alt: "Kiara Matharu  commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-11.JPG",
      alt: "Kiara Matharu  lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-12.JPG",
      alt: "Kiara Matharu  fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-13.JPG",
      alt: "Kiara Matharu  fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-14.JPG",
      alt: "Kiara Matharu  campaign portrait",
      category: "Campaign",
    },
    {
      src: "/portfolio/gallery-15.JPG",
      alt: "Kiara Matharu  editorial portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-16.JPG",
      alt: "Kiara Matharu  commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-17.JPG",
      alt: "Kiara Matharu  lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-18.JPG",
      alt: "Kiara Matharu  fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-19.JPG",
      alt: "Kiara Matharu  fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-20.JPG",
      alt: "Kiara Matharu  fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-21.JPG",
      alt: "Kiara Matharu  fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-22.JPG",
      alt: "Kiara Matharu  fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-23.JPG",
      alt: "Kiara Matharu  fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-24.JPG",
      alt: "Kiara Matharu  fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-25.JPG",
      alt: "Kiara Matharu  fashion portfolio",
      category: "Fashion",
      featured: true,
    },
    {
      src: "/portfolio/gallery-26.JPG",
      alt: "Kiara Matharu  fashion portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-27.JPG",
      alt: "Kiara Matharu  studio portrait",
      category: "Studio",
    },
    {
      src: "/portfolio/gallery-28.JPG",
      alt: "Kiara Matharu  outdoor portrait",
      category: "Outdoor",
      featured: true,
    },
    {
      src: "/portfolio/gallery-29.JPG",
      alt: "Kiara Matharu  commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-30.JPG",
      alt: "Kiara Matharu  lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-31.JPG",
      alt: "Kiara Matharu  lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-32.JPG",
      alt: "Kiara Matharu  fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-33.JPG",
      alt: "Kiara Matharu  fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-34.JPG",
      alt: "Kiara Matharu  campaign portrait",
      category: "Campaign",
    },
    {
      src: "/portfolio/gallery-35.JPG",
      alt: "Kiara Matharu  editorial portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-36.JPG",
      alt: "Kiara Matharu  commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-37.JPG",
      alt: "Kiara Matharu  lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-38.JPG",
      alt: "Kiara Matharu  fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-39.JPG",
      alt: "Kiara Matharu  fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-40.JPG",
      alt: "Kiara Matharu  fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-41.JPG",
      alt: "Kiara Matharu  fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-42.JPG",
      alt: "Kiara Matharu  fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-43.JPG",
      alt: "Kiara Matharu  fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-44.JPG",
      alt: "Kiara Matharu  fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-45.JPG",
      alt: "Kiara Matharu  fashion portfolio",
      category: "Fashion",
      featured: true,
    },
    {
      src: "/portfolio/gallery-46.JPG",
      alt: "Kiara Matharu  fashion portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-47.JPG",
      alt: "Kiara Matharu  studio portrait",
      category: "Studio",
    },
    {
      src: "/portfolio/gallery-48.JPG",
      alt: "Kiara Matharu  outdoor portrait",
      category: "Outdoor",
      featured: true,
    },
    {
      src: "/portfolio/gallery-49.JPG",
      alt: "Kiara Matharu  commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-50.JPG",
      alt: "Kiara Matharu  lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-51.JPG",
      alt: "Kiara Matharu  fashion portfolio",
      category: "Fashion",
      featured: true,
    },
    {
      src: "/portfolio/gallery-52.JPG",
      alt: "Kiara Matharu  fashion portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-53.JPG",
      alt: "Kiara Matharu  studio portrait",
      category: "Studio",
    },
    {
      src: "/portfolio/gallery-54.JPG",
      alt: "Kiara Matharu  outdoor portrait",
      category: "Outdoor",
      featured: true,
    },
    {
      src: "/portfolio/gallery-55.JPG",
      alt: "Kiara Matharu  commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-56.JPG",
      alt: "Kiara Matharu  lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-57.JPG",
      alt: "Kiara Matharu  fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-58.JPG",
      alt: "Kiara Matharu  campaign portrait",
      category: "Campaign",
    },
    {
      src: "/portfolio/gallery-59.JPG",
      alt: "Kiara Matharu  editorial portrait",
      category: "Fashion",
    },
    
  ],

  /**
   * VIDEOS / REELS
   * type: "mp4"   -> plays inline from a local or remote MP4 file
   * type: "embed" -> plays an external URL (YouTube/Vimeo) in the modal
   * Videos never autoplay with sound.
   */
  videos: [
  {
    title: "Kiara Matharu  Model Shoot",
    category: "RAW Video FOOTAGE",
    thumbnail: "/portfolio/profile.JPG",
    src: "/portfolio/videos/KIARA MATHUR.mp4",
    type: "mp4",
  },
  {
    title: "Kiara Matharu  Model Shoot",
    category: "LIVE ADVERTISEMENT RECORDING FOOTAGE",
    thumbnail: "/portfolio/profile.JPG",
    src: "/portfolio/videos/KIARA MATHUR (1).mp4",
    type: "mp4",
  },
],

   
/**{
    name: "Flipkart",
    description: "Featured e-commerce and commercial work.",
    url: "https://www.flipkart.com/",
  },
  {
    name: "Amazon",
    description: "Commercial and e-commerce collaboration.",
    url: "https://www.amazon.in/",
  },*/
  
  
}
