import { getAllCaseStudyIds, getCaseStudyData } from '../../lib/case-studies'



const CaseStudy = ({caseStudyData}) => {
  return (
    <main>
      {caseStudyData.title}<br />
      {caseStudyData.id}<br />
    </main>
  )

}

export async function getStaticPaths() {
  const paths = getAllCaseStudyIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const caseStudyData = getCaseStudyData(params.id)
  return {
    props: {
      caseStudyData
    }
  }

}

export default CaseStudy
