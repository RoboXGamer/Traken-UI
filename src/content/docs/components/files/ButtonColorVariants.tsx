import { Button } from "@traken-ui/react";

function ButtonColorVariants() {
  return (
    <>
      <Button
        color="primary"
        size="md"
        rounded="sm"
        variant="solid"
        className="cursor-pointer"
      >
        Primary
      </Button>
      <Button
        color="secondary"
        size="md"
        rounded="sm"
        variant="solid"
        className="cursor-pointer"
      >
        Secondary
      </Button>
      <Button
        color="success"
        size="md"
        rounded="sm"
        variant="solid"
        className="cursor-pointer"
      >
        Success
      </Button>
      <Button
        color="warning"
        size="md"
        rounded="sm"
        variant="solid"
        className="cursor-pointer"
      >
        Warning
      </Button>
      <Button
        color="danger"
        size="md"
        rounded="sm"
        variant="solid"
        className="cursor-pointer"
      >
        Danger
      </Button>
    </>
  );
}
export default ButtonColorVariants;
