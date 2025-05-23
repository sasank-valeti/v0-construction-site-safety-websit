import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <Skeleton className="h-12 w-2/3 mb-6 mx-auto" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-3/4 mb-12" />

        <div className="mb-12">
          <Skeleton className="h-10 w-48 mb-6" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-3/4 mb-8" />

          <div className="grid md:grid-cols-2 gap-8">
            <Skeleton className="h-40 w-full rounded-lg" />
            <Skeleton className="h-40 w-full rounded-lg" />
          </div>
        </div>

        <div className="mb-12">
          <Skeleton className="h-10 w-48 mb-6" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-full mb-8" />

          <div className="space-y-4 mb-8">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
          </div>

          <Skeleton className="h-40 w-full rounded-lg" />
        </div>

        <div className="mb-12">
          <Skeleton className="h-10 w-48 mb-6" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-full mb-8" />

          <Skeleton className="h-60 w-full rounded-lg mb-8" />
          <Skeleton className="h-80 w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}
