import { Text, useMantineTheme } from '@mantine/core'

export default function Line({ k, v }: { k: string; v: string }) {
  const t = useMantineTheme()
  return (
    <Text span color={t.colors.light[t.fn.primaryShade()]}>
      {k.charAt(0).toUpperCase() + k.slice(1)}
      {': '}
      <Text span fw={700}>
        {v}
      </Text>
    </Text>
  )
}
