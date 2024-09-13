import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

interface kpiProps{
  kpiInfo: {
    title: string
    value: number
  }[]
}

export default function kpi({kpiInfo} : kpiProps) {

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {kpiInfo.map((item, index) => (
        <Card key={index} className="align-center justify-center">
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R${item.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}