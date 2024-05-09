

export default function ProjectDetail({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>
  }