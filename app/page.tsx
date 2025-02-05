import Image from "next/image"

export default function QRCodePage() {
  const qrCodes = [
    {
      title: "Répértoire des fermes aquacoles",
      title_2: "Registry of Aquaculture Farms",
      image: "/qrcode/QR-Code-Répértoire-des-fermes-aquacoles.svg?height=400&width=400",
    },
    {
      title: "Guide des procédures",
      title_2: "Procedures Guide",
      image: "/qrcode/QR-Code-Guide-des-procédures.svg?height=400&width=400",
    },
    // {
    //   title: "Farm Locations",
    //   image: "/placeholder.svg?height=400&width=400",
    // },
    // {
    //   title: "Documentation",
    //   image: "/placeholder.svg?height=400&width=400",
    // },
  ]

  return (
    <main className="min-h-screen bg-white flex flex-col items-center py-12" style={{
      backgroundImage: `url('/qrcode/bg.jpg')`,
    }}>
      {/* Logo Section */}
      <div className="mb-12">
        <Image src="/qrcode/Logo.svg" alt="Company Logo" width={400} height={80} className="h-36 w-auto" priority />
      </div>

      {/* QR Codes Grid */}
      {/* md:grid-cols-2 */}
      <div className="container flex justify-center mt-32 px-4">
        <div className="grid grid-cols-1  gap-16 w-full max-w-[1200px]">
          {qrCodes.map((qr, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Speech Bubble Title */}
              <div className="relative mb-4">
                <div className="bg-[#00A7E1] text-white px-8 py-4 rounded-[2rem] text-2xl font-semibold">
                  {qr.title} <br />
                  {qr.title_2}
                </div>
                {/* Triangle for Speech Bubble */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-0 h-0 
                               border-l-[15px] border-l-transparent
                               border-t-[20px] border-t-[#00A7E1]
                               border-r-[15px] border-r-transparent"
                ></div>
              </div>

              {/* QR Code Container */}
              <div className="p-8 rounded-3xl border-[3px] border-[#00A7E1]">
                <Image
                  src={qr.image || "/placeholder.svg"}
                  alt={`QR Code for ${qr.title}`}
                  width={200}
                  height={200}
                  className="w-48 h-48"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

