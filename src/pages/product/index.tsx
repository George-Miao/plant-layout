import LinkCard from '@comp/LinkCard'
import { ProductCategory, productCategories } from '@data/product'
import {
  Card,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Title,
  useMantineTheme
} from '@mantine/core'
import Link from 'next/link'

export default function Retailer() {
  const t = useMantineTheme()

  return (
    <Container my='2rem'>
      <Stack>
        <Title order={2} mb='lg'>
          Product Category
        </Title>
        <SimpleGrid
          breakpoints={[
            { maxWidth: t.breakpoints.xs, cols: 1 },
            { maxWidth: t.breakpoints.sm, cols: 2 },
            { minWidth: t.breakpoints.sm, cols: 3 }
          ]}
        >
          {Object.entries(productCategories).map(([k, v]) => {
            return <ProductCard key={k} id={k} {...v} />
          })}
        </SimpleGrid>
      </Stack>
    </Container>
  )
}

function ProductCard({ id }: ProductCategory & { id: string }) {
  return (
    <LinkCard href={`/product/${id}`}>
      <Image
        alt={`${id} logo`}
        src={`/image/product/${id}.png`}
        height={80}
        fit='contain'
        p='md'
      />
    </LinkCard>
  )
}
