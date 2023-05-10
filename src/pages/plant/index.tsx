import LinkCard from '@comp/LinkCard'
import {
  Container,
  SimpleGrid,
  Stack,
  Title,
  useMantineTheme
} from '@mantine/core'

export const plants = ['Florida1', 'Florida2', 'California1', 'California2']

export default function Index() {
  const t = useMantineTheme()

  return (
    <Container>
      <Stack>
        <Title order={2} mb='lg'>
          Plant Dashboards
        </Title>
        <SimpleGrid
          breakpoints={[
            { maxWidth: t.breakpoints.xs, cols: 1 },
            { maxWidth: t.breakpoints.sm, cols: 2 },
            { minWidth: t.breakpoints.sm, cols: 3 }
          ]}
        >
          {plants.map(plant => {
            return (
              <LinkCard key={plant} href={`/plant/${plant}`}>
                <Title>
                  {plant.substring(0, plant.length - 1) +
                    ' ' +
                    plant.charAt(plant.length - 1)}
                </Title>
              </LinkCard>
            )
          })}
        </SimpleGrid>
      </Stack>
    </Container>
  )
}
