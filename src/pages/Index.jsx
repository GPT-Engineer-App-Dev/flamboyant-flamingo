import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const Index = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-20 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <h1 className="text-5xl font-bold mb-4">Discover the World of Flamingos</h1>
        <p className="text-xl">Learn about the fascinating lives of these beautiful birds.</p>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto text-center py-12">
        <h2 className="text-3xl font-bold mb-6">About Flamingos</h2>
        <p className="text-lg mb-4">Flamingos are a type of wading bird in the family Phoenicopteridae. They are known for their vibrant pink feathers, long legs, and distinctive downward-bending beaks.</p>
        <p className="text-lg mb-4">These birds are found in both the Western Hemisphere and Eastern Hemisphere, but they are more numerous in the latter. Flamingos typically inhabit shallow lakes, lagoons, mangrove swamps, and sandy islands.</p>
        <p className="text-lg">Flamingos are social birds that live in colonies that can number in the thousands. They are known for their synchronized movements and unique feeding habits.</p>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/placeholder.svg" alt="Flamingo 1" className="w-full h-auto rounded-lg" />
          <img src="/placeholder.svg" alt="Flamingo 2" className="w-full h-auto rounded-lg" />
          <img src="/placeholder.svg" alt="Flamingo 3" className="w-full h-auto rounded-lg" />
          <img src="/placeholder.svg" alt="Flamingo 4" className="w-full h-auto rounded-lg" />
          <img src="/placeholder.svg" alt="Flamingo 5" className="w-full h-auto rounded-lg" />
          <img src="/placeholder.svg" alt="Flamingo 6" className="w-full h-auto rounded-lg" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <Input id="name" {...register("name")} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <Input id="email" type="email" {...register("email")} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <Textarea id="message" {...register("message")} />
              </div>
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;