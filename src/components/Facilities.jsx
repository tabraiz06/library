import {
  Wifi,
  Wind,
  Droplets,
  Leaf,
  Armchair,
  Battery,
  Zap,
  Users,
} from "lucide-react";

const facilities = [
  {
    icon: Users,
    title: "Separate Desks",
    description: "Individual workspace for each student",
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Fast and reliable WiFi connection",
  },
  {
    icon: Wind,
    title: "Air Conditioned",
    description: "Fully air-conditioned environment",
  },
  {
    icon: Droplets,
    title: "RO Water",
    description: "Pure and clean drinking water",
  },
  {
    icon: Leaf,
    title: "Peaceful Environment",
    description: "Quiet and conducive atmosphere",
  },
  {
    icon: Armchair,
    title: "Comfortable Seating",
    description: "Ergonomic chairs for long study hours",
  },
  {
    icon: Battery,
    title: "Charging Points",
    description: "Multiple charging stations available",
  },
  {
    icon: Zap,
    title: "24/7 Electricity",
    description: "Uninterrupted power supply",
  },
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <facility.icon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">{facility.title}</h3>
              <p className="text-sm text-muted-foreground text-center">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
