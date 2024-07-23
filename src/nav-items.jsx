import { Home, Calendar, Beer, Map, HelpCircle } from "lucide-react";
import Index from "./pages/Index.jsx";
import EventManagement from "./components/EventManagement";
import BarOrdering from "./components/BarOrdering";
import VenueNavigation from "./components/VenueNavigation";
import UserSupport from "./components/UserSupport";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Event Management",
    to: "/events",
    icon: <Calendar className="h-4 w-4" />,
    page: <EventManagement />,
  },
  {
    title: "Bar Ordering",
    to: "/bar",
    icon: <Beer className="h-4 w-4" />,
    page: <BarOrdering />,
  },
  {
    title: "Venue Navigation",
    to: "/navigation",
    icon: <Map className="h-4 w-4" />,
    page: <VenueNavigation />,
  },
  {
    title: "User Support",
    to: "/support",
    icon: <HelpCircle className="h-4 w-4" />,
    page: <UserSupport />,
  },
];