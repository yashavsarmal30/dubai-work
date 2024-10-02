import { Testimonial } from "@/types/testimonial";
import { v4 as uuid } from "uuid";

export const testimonialData: Testimonial[] = [
  {
    id: uuid(),
    name: "Musharof Chy",
    designation: "Founder @ Pimjo",
    image: "/images/testimonial/image-1.jpg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim. In ac lectus vel orci accumsan ultricies at in libero accumsan Lorem Ipsum has been the industry's standard",
  },
  {
    id: uuid(),
    name: "Naimur Rahman",
    designation: "Product Designer @ Pimjo",
    image: "/images/testimonial/image-1.jpg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim. In ac lectus vel orci accumsan ultricies at in libero accumsan Lorem Ipsum has been the industry's standard",
  },
  {
    id: uuid(),
    name: "Shafiq Hammad",
    designation: "Frontend Developer @ Pimjo",
    image: "/images/testimonial/image-1.jpg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim. In ac lectus vel orci accumsan ultricies at in libero accumsan Lorem Ipsum has been the industry's standard",
  },
];
