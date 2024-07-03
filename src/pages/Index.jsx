import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const Index = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gray-100">
        <img src="/placeholder.svg" alt="Flamingos" className="mx-auto mb-4 w-full h-64 object-cover" />
        <h1 className="text-4xl font-bold mb-2">Discover the World of Flamingos</h1>
        <p className="text-lg">Learn about the fascinating lives of these beautiful birds.</p>
      </section>

      {/* About Section */}
      <section className="py-12">
        <Card>
          <CardHeader>
            <CardTitle>About Flamingos</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Flamingos are a type of wading bird in the family Phoenicopteridae. They are known for their vibrant pink feathers, long legs, and distinctive downward-bending beaks. Flamingos are social birds that live in large colonies, and they can be found in various parts of the world, including Africa, the Americas, and Europe.</p>
            <ul className="list-disc list-inside mt-4">
              <li>Flamingos get their pink color from their diet, which is rich in carotenoid pigments.</li>
              <li>They are filter feeders, using their specialized beaks to strain food from the water.</li>
              <li>Flamingos are known for their unique mating dances and synchronized movements.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Gallery Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/placeholder.svg" alt="Flamingo 1" className="w-full h-48 object-cover" />
          <img src="/placeholder.svg" alt="Flamingo 2" className="w-full h-48 object-cover" />
          <img src="/placeholder.svg" alt="Flamingo 3" className="w-full h-48 object-cover" />
          <img src="/placeholder.svg" alt="Flamingo 4" className="w-full h-48 object-cover" />
          <img src="/placeholder.svg" alt="Flamingo 5" className="w-full h-48 object-cover" />
          <img src="/placeholder.svg" alt="Flamingo 6" className="w-full h-48 object-cover" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Input id="name" {...register("name")} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input id="email" {...register("email")} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <Textarea id="message" {...register("message")} />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;