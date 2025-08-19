import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import styled from "styled-components"

const ProgressRoot = styled(ProgressPrimitive.Root)`
  position: relative;
  height: 16px;
  width: 100%;
  overflow: hidden;
  border-radius: 9999px;
  background-color: #e5e5e5; /* equivalente a bg-secondary */
`;

const ProgressIndicator = styled(ProgressPrimitive.Indicator)<{ value?: number }>`
  height: 100%;
  background-color: #73b809; /* equivalente a bg-primary */
  transition: all 0.3s ease-in-out;
  transform: ${({ value = 0 }) => `translateX(-${100 - value}%)`};
`;

export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { value?: number }
>(({ value = 0, ...props }, ref) => (
  <ProgressRoot ref={ref} {...props}>
    <ProgressIndicator value={value} />
  </ProgressRoot>
));

Progress.displayName = "Progress";
