import React from 'react'

export default function Bottom() {
  return (
    <div>
      <footer
        className="text-center py-4 background: #FFFFFF;
 text-black"
      >
        <p>© J.E Farm. All rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">
            Terms and Conditions
          </a>
        </div>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          </div>
      </footer>
    </div>
  );
}
