import Counter from '../components/Counter/Counter'
import GridDemo from '../components/GridDemo'

export default function HomePage() {
  return (
    <div>
      <section className="main-grid p-4">
        <Counter className="content-section" />
      </section>
      <GridDemo />;
    </div>
  )
}
