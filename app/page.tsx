'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"
export default function QRCodePage() {
  const [showQRCodes, setShowQRCodes] = useState(true)
  const [autoSwitch, setAutoSwitch] = useState(true)

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

  // Auto switch every 15 minutes if autoSwitch is enabled
  // useEffect(() => {
  //   function updateSection() {
  //     if (!autoSwitch) return

  //     const now = new Date()
  //     const minutes = now.getMinutes()
  //     const seconds = now.getSeconds()

  //     // Switch every 15 minutes (0, 15, 30, 45 minutes past the hour)
  //     setShowQRCodes(minutes < 15 || (minutes >= 30 && minutes < 45))
  //   }

  //   // Initial update
  //   updateSection()

  //   // Set up interval to check every second
  //   const interval = setInterval(updateSection, 1000)

  //   return () => clearInterval(interval)
  // }, [autoSwitch])

  useEffect(() => {
    if (!autoSwitch) return;

    const interval = setInterval(() => {
      setShowQRCodes((prev) => !prev);
    }, 3000); // Toggle every 3 seconds

    return () => clearInterval(interval);
  }, [autoSwitch]);

  console.log("showQRCodes", showQRCodes);



  console.log("showQRCodes", showQRCodes);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center py-12" style={{
      backgroundImage: `url('/qrcode/bg.jpg')`,
    }}>
      {/* Controls */}
      <div className="fixed top-4 right-4 flex items-center gap-8 bg-white/80 backdrop-blur p-4 rounded-lg shadow-md z-50">
        <div className="flex items-center space-x-2">
          <Switch id="auto-switch" checked={autoSwitch} onCheckedChange={setAutoSwitch} />
          <Label htmlFor="auto-switch">Auto Switch</Label>
        </div>
        <Button onClick={() => setShowQRCodes((prev) => !prev)} variant="outline">
          Switch Section
        </Button>
      </div>

      <div className="flex flex-col items-center py-12">
        {/* Logo Section */}
        {/* Logo Section */}
        <div className="mb-12">
          <Image src="/qrcode/Logo.svg" alt="Company Logo" width={400} height={80} className="h-36 w-auto" priority />
        </div>

        {/* QR Codes Grid */}
        {/* md:grid-cols-2 */}
        <div className="container mt-32 px-4">
          {showQRCodes ? (
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
          ) : (
            // Other Section (Information Dashboard)
            <div className="max-w-[1200px] mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-[#00A7E1]">Information Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Example Dashboard Content */}
                <div className="p-6 rounded-xl border-2 border-[#00A7E1] bg-white shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Recent Updates</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00A7E1] rounded-full"></span>
                      Latest procedures updated
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00A7E1] rounded-full"></span>
                      New farm locations added
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00A7E1] rounded-full"></span>
                      Documentation revised
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl border-2 border-[#00A7E1] bg-white shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Statistics</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">Total Scans</p>
                      <p className="text-2xl font-bold text-[#00A7E1]">1,234</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Active Users</p>
                      <p className="text-2xl font-bold text-[#00A7E1]">567</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl border-2 border-[#00A7E1] bg-white shadow-lg md:col-span-2">
                  <h3 className="text-xl font-semibold mb-4">System Status</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-green-500 font-bold">Active</div>
                      <div className="text-sm text-gray-600">QR System</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-500 font-bold">Online</div>
                      <div className="text-sm text-gray-600">Database</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-500 font-bold">Secure</div>
                      <div className="text-sm text-gray-600">Connection</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-500 font-bold">Updated</div>
                      <div className="text-sm text-gray-600">Content</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

