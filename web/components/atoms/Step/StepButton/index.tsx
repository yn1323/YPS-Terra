import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { useScreenSize } from '@/hooks/useScreenSize'

type PropTypes = {
  labels: string[]
  currentStep: number
  nextStep: (step: number) => void
}

export const StepButton: FC<PropTypes> = ({
  labels,
  currentStep,
  nextStep,
}) => {
  const { isPC } = useScreenSize()
  const buttonProp = {
    size: isPC ? 'md' : 'sm',
  }

  return (
    <HStack justifyContent={'space-evenly'} w="100%">
      {labels.map((label, i) => (
        <HStack key={i}>
          <VStack spacing={0}>
            {!isPC && <Text fontSize="xs">STEP</Text>}
            <Button
              {...buttonProp}
              rounded="full"
              colorScheme={currentStep === i ? 'primary' : undefined}
              onClick={() => nextStep(i)}
            >
              {i + 1}
            </Button>
          </VStack>
          {isPC && <Text as="div">{label}</Text>}
        </HStack>
      ))}
    </HStack>
  )
}
