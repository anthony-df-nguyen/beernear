import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-400 p-4">
      <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-2">Grid item 1</div>
        <div className="bg-gray-50 p-2">Grid item 2</div>
        <div className="bg-gray-50 p-2">Grid item 3</div>
        <div className="bg-gray-50 p-2">Grid item 4</div>
        <div className="bg-gray-50 p-2">Grid item 5</div>
        <div className="bg-gray-50 p-2">Grid item 6</div>
      </div>
    </div>
  );
}
