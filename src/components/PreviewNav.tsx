
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Eye, Home } from "lucide-react";

const PreviewNav = () => {
  const location = useLocation();
  
  console.log("PreviewNav - Current pathname:", location.pathname);
  
  return (
    <div className="fixed top-4 right-4 z-[9999] flex gap-2">
      {location.pathname === "/" && (
        <>
          <Link to="/preview-layout1">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
              <Eye className="w-4 h-4 mr-2" />
              Preview Layout 1
            </Button>
          </Link>
          <Link to="/preview-layout2">
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg">
              <Eye className="w-4 h-4 mr-2" />
              Preview Layout 2
            </Button>
          </Link>
        </>
      )}
      
      {(location.pathname === "/preview-layout1" || location.pathname === "/preview-layout2") && (
        <Link to="/">
          <Button size="sm" variant="outline" className="border-gray-300 hover:bg-gray-50 bg-white shadow-lg">
            <Home className="w-4 h-4 mr-2" />
            Back to Live Site
          </Button>
        </Link>
      )}
    </div>
  );
};

export default PreviewNav;
