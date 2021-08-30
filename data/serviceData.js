import {
  AdjustmentsIcon,
  BeakerIcon,
  DesktopComputerIcon,
  DeviceMobileIcon,
  NewspaperIcon,
  SupportIcon,
} from "@heroicons/react/outline";
const ServiceData = [
  {
    id: 1,
    icon: <BeakerIcon className='w-8 text-blue-dark' />,
    title: "Projects!",
    paragraph:
      "We combine different skills and experiences to form the team best suited to achieve your project goals. Together we take your concept from idea to reality.",
  },
  {
    id: 2,
    icon: <AdjustmentsIcon className='w-8 text-blue-dark' />,
    title: "Maitenance!",
    paragraph:
      "It is of great importance that Your systems are constantly improved, secured and updated.",
  },
  {
    id: 3,
    icon: <NewspaperIcon className='h-8 w-8 text-blue-dark' />,
    title: "Consultants!",
    paragraph:
      "Complement your tech team with responsive and passionate developers.",
  },
  {
    id: 4,
    icon: <DesktopComputerIcon className='w-8 text-blue-dark' />,
    title: "Front-End & Back-End!",
    paragraph:
      "We work with everything from database modeling to API development, we use the latest frameworks to quickly build stable and user-friendly interfaces.",
  },
  {
    id: 5,
    icon: <DeviceMobileIcon className='w-8 text-blue-dark' />,
    title: "iOS & Android!",
    paragraph:
      "Need help developing an App? We have experience and knowledge of building innovative and functional apps for different platforms",
  },
  {
    id: 6,
    icon: <SupportIcon className='w-8 text-blue-dark' />,
    title: "Operation & Support!",
    paragraph:
      "The majority of our projects are maintained and operated by our Hosting Officers.",
  },
];
export default ServiceData;
