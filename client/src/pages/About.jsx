import CallToAction from '../components/CallToAction';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Mahi's Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate corporis dolore, labore odio numquam hic ipsam molestias voluptates, optio laborum fuga quam dicta unde quae quaerat facere exercitationem distinctio consequuntur?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facilis mollitia, provident maiores facere dolores ipsam quod fugiat. Quaerat illum corrupti inventore dicta enim aut, modi sunt animi tempora aliquid?
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
        <div className='mt-10'>
          <CallToAction />
        </div>
      </div>
    </div>
  );
}