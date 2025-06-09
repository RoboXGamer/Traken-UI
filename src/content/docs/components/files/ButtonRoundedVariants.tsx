import { Button } from "@traken-ui/react";

function ButtonRoundedVariants() {
  return (
    <>
      <Button
        color="secondary"
        size="md"
        rounded="sm"
        variant="solid"
        className="cursor-pointer"
      >
        Small
      </Button>
      <Button
        color="secondary"
        size="md"
        rounded="md"
        variant="solid"
        className="cursor-pointer"
      >
        Medium
      </Button>
      <Button
        color="secondary"
        size="md"
        rounded="lg"
        variant="solid"
        className="cursor-pointer"
      >
        Large
      </Button>
      <Button
        color="secondary"
        size="md"
        rounded="xl"
        variant="solid"
        className="cursor-pointer"
      >
        Extra lg
      </Button>
    </>
  );
}

export default ButtonRoundedVariants;
