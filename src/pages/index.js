import Head from 'next/head'
import Navbar from '@/Components/Navbar'
import Products from '@/Components/Products'
import Footer from '@/Components/Footer'
import Locations from '@/Components/Locations'
import Main from '@/Components/Main'
import Learn from '@/Components/Learn'
export default function Home() {
  return (
    <>
      <Head>
        <title>Rajalakshmi Agencies</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
          integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
          integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>

      </Head>
      <main >
        
        <Navbar />
      
        <Main />

        <Navbar />
        <Products />
        <Learn />
        <Locations />
        <Footer />

      </main>
    </>
  )
}