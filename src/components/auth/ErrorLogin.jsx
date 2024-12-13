
export const ErrorLogin = () => {
    return (
 
        <div class="flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50">
        <div
            class="cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#ff525236] px-[10px] border border-[#ff5252] text-[#ff5252]"
        >
            <div class="flex gap-2">
            <div class="text-[#d65563] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                ></path>
                </svg>
            </div>
            <div>
                <p>Al parecer las credenciales no son correctas, verifica el e-mail o la contraseña.</p>
            </div>
            </div>
        </div>
        </div>

    )
}