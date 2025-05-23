"use client"
import { HardHat, Shield } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="relative">
              <div className="bg-yellow-500 rounded-lg p-2">
                <HardHat className="h-6 w-6 text-black" />
              </div>
              <div className="absolute -top-1 -right-1 bg-black rounded-full w-3 h-3 flex items-center justify-center">
                <Shield className="h-2 w-2 text-yellow-500" />
              </div>
            </div>
            <div>
              <span className="font-bold text-lg text-yellow-500">{t("siteName")}</span>
              <div className="text-xs text-gray-400 font-medium">{t("tagline")}</div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">{t("common.footer.contact")}</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="font-medium text-white">{t("common.footer.college")}</li>
              <li className="font-medium text-yellow-500">{t("common.footer.team")}</li>
              <li>Varshini VB</li>
              <li>Prajwal KR</li>
              <li>Sujan BM</li>
              <li>Valeti Sasank</li>
            </ul>
          </div>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} {t("siteName")}. {t("common.footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
