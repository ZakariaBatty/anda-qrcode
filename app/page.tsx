import Image from "next/image"

export default function QRCodePage() {
  const qrCodes = [
    {
      title: "QR Code Répértoire des fermes aquacoles",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "QR Code Guide des procédures",
      image: "/placeholder.svg?height=400&width=400",
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
    <main className="min-h-screen bg-white flex flex-col items-center py-12">
      {/* Logo Section */}
      <div className="mb-12">
        <Image src="Logo.svg" alt="Company Logo" width={200} height={80} className="h-20 w-auto" priority />
      </div>

      {/* QR Codes Grid */}
      <div className="container flex justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-[1200px]">
          {qrCodes.map((qr, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Speech Bubble Title */}
              <div className="relative mb-4">
                <div className="bg-[#00A7E1] text-white px-8 py-4 rounded-[2rem] text-2xl font-semibold">
                  {qr.title}
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

