"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Save, Building, CreditCard, Bell, Shield, Printer, Receipt, Palette, Globe } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
  const [user, setUser] = useState<{ role: string; email: string } | null>(null)
  const [storeSettings, setStoreSettings] = useState({
    storeName: "Quick Sales",
    storeAddress: "123 Main Street, City, Country",
    storePhone: "+1 234 567 890",
    storeEmail: "info@quicksales.com",
    storeLogo: "/placeholder.svg?height=100&width=100",
    taxRate: "7.5",
    currency: "NGN",
    language: "en",
    theme: "light",
    receiptHeader: "Thank you for shopping with us!",
    receiptFooter: "Please come again!",
    enableBarcode: true,
    enableReceipts: true,
    enableInventoryAlerts: true,
    lowStockThreshold: "10",
    enableEmailNotifications: false,
    enableSmsNotifications: false,
  })
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setStoreSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setStoreSettings((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setStoreSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    // In a real app, you would save these settings to your API
    alert("Settings saved successfully!")
  }

  if (!user) {
    return null
  }

  const canAccessSettings = user.role === "management"

  if (!canAccessSettings) {
    return (
      <DashboardLayout>
        <div className="flex h-[calc(100vh-150px)] items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Access Denied</h1>
            <p className="mt-2 text-muted-foreground">You don't have permission to view this page</p>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your store settings and preferences</p>
        </div>

        <Tabs defaultValue="general">
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="lg:w-1/5">
              <TabsList className="flex flex-col h-full justify-start space-y-1 w-full bg-transparent p-0">
                <TabsTrigger
                  value="general"
                  className="justify-start px-4 py-2 h-9 data-[state=active]:bg-muted rounded-md"
                >
                  <Building className="h-4 w-4 mr-2" />
                  General
                </TabsTrigger>
                <TabsTrigger
                  value="billing"
                  className="justify-start px-4 py-2 h-9 data-[state=active]:bg-muted rounded-md"
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Billing
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="justify-start px-4 py-2 h-9 data-[state=active]:bg-muted rounded-md"
                >
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="justify-start px-4 py-2 h-9 data-[state=active]:bg-muted rounded-md"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Security
                </TabsTrigger>
                <TabsTrigger
                  value="receipts"
                  className="justify-start px-4 py-2 h-9 data-[state=active]:bg-muted rounded-md"
                >
                  <Receipt className="h-4 w-4 mr-2" />
                  Receipts
                </TabsTrigger>
                <TabsTrigger
                  value="appearance"
                  className="justify-start px-4 py-2 h-9 data-[state=active]:bg-muted rounded-md"
                >
                  <Palette className="h-4 w-4 mr-2" />
                  Appearance
                </TabsTrigger>
              </TabsList>
            </aside>
            <div className="flex-1 lg:max-w-3xl">
              {/* ...tab contents as in your code... */}
            </div>
          </div>
        </Tabs>
      </div>
    </DashboardLayout>
  )
} 