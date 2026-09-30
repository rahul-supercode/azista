import StatusMessage from "@/components/shared/components/StatusMessage";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <StatusMessage
      eyebrow="404"
      title="Page not found"
      titleClassName="heading-2"
    >
      <p>The page you’re looking for doesn’t exist or has been moved.</p>
      <Button href="/">Go home</Button>
    </StatusMessage>
  );
}
