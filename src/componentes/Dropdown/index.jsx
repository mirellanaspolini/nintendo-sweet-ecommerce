import { Menu, Transition } from "@headlessui/react";
import useAuth from "contexts/useAuth";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Dropdown = () => {
    const { signOut } = useAuth();
    const navigate = useNavigate();
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="flex gap-2 py-2 px-[.85rem] duration-100 sm:px-5 sm:py-3 duration-00 font-titulos bg-branco rounded-full border-2 border-violeta-01 hover:bg-roxo-hover text-violeta-01 text-medium">
                    <img
                        src="/img/icons/Profile_icon.svg"
                        width="24px"
                        alt=""
                    />
                    <span className="sr-only sm:not-sr-only">Minha conta</span>
                    <img
                        src="/img/icons/chevron-down-violet.svg"
                        width="18px"
                        alt=""
                    />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-branco-puro shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={classNames(
                                        active
                                            ? "bg-roxo-hover text-violeta-02"
                                            : "text-violeta-01",
                                        "block w-full px-4 py-2 text-left font-textos"
                                    )}
                                >
                                    Configurações
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    href="#"
                                    className={classNames(
                                        active
                                            ? "bg-roxo-hover text-violeta-02"
                                            : "text-violeta-01",
                                        "block w-full px-4 py-2 text-left font-textos"
                                    )}
                                >
                                    Meus pedidos
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    type="button"
                                    onClick={() => [
                                        signOut(),
                                        navigate("/entrar"),
                                    ]}
                                    className={classNames(
                                        active
                                            ? "bg-roxo-hover text-violeta-02"
                                            : "text-violeta-01",
                                        "block w-full px-4 py-2 text-left font-textos"
                                    )}
                                >
                                    Sair
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default Dropdown;
