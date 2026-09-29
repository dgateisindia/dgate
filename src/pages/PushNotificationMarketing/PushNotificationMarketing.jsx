import "./PushNotificationMarketing.css";

import {
  FaBell,
} from "react-icons/fa";

import ServicePageShell
  from "../../components/ServicesPage/ServicePageShell/ServicePageShell";


function PushNotificationMarketing() {
  const services = [
    "Web Push Notifications",
    "Mobile Push Notifications",
    "Behavioural Trigger Campaigns",
    "Personalized Messaging",
    "Retargeting Notifications",
    "Campaign Analytics",
  ];


  return (
    <ServicePageShell
      pageClass="push-notification-page"
      eyebrow="CUSTOMER RETENTION"
      title="Push Notification Marketing"
      description="We use timely and personalized push notifications to bring customers back, increase engagement and improve retention across web and mobile experiences."
      tagline="Bring users back. Boost retention."
      services={services}
      icon={FaBell}
      slug="push-notification-marketing"
      seoTitle="Push Notification Marketing Bangalore | DGATE IS"
      metaDescription="Web and mobile push notification marketing services including behavioural campaigns, retargeting, personalized messaging and notification analytics."
    />
  );
}


export default PushNotificationMarketing;