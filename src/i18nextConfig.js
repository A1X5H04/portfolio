import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          header: {
            home: "Home",
            dashboard: "Dashboard",
            links: "Links",
          },
          home: {
            title: {
              introduction: "Hi, I am",
              headings: {
                web_designer: "Web Designer",
                android_developer: "Android Developer",
                react_developer: "React Developer",
                nextjs_developer: "Next.JS Developer",
                cs_student: "CS Student",
                oss_contributor: "OSS Contributor",
                linux_enthusiast: "Linux Enthusiast",
                frontend_developer: "Frontend Developer",
              },
              subtitle: {
                text: "I am a software developer with a passion for building innovative and user-friendly solutions. I am skilled in a variety of programming languages and technologies, including",
                and: "and",
              },
            },
            buttons: {
              download_cv: "Download CV",
              github: "Github",
            },
            project: {
              title: "Projects",
              description: "Some of the Projects I have done",
              show_more: "Show more",
            },
          },
          dashboard: {
            title: "Dashboard",
            description: "About me, Statistics, Languages etc.",
            cards: {
              headings: {
                languages_used: "Frameworks/Languages Used",
                top_languages: "Top Languages",
                github_stats: "Github Stats",
              },
            },
          },
          links: {
            title: "Links",
            description: "Contact and Social Links",
            contact_via_form: "or Contact me via form",
            form_name: "Name",
            form_email: "Email",
            form_message: "Message",
            button: {
              send: "Send",
              send_success: "Send Successfully!",
              send_failed: "Failed to send!",
            },
          },
        },
      },
      ja: {
        translation: {
          header: {
            home: "ホーム",
            dashboard: "ダッシュボード",
            links: "リンク",
          },
          home: {
            title: {
              introduction: "こんにちは, 私は",
              headings: {
                web_designer: "ウェブデザイナー",
                android_developer: "アンドロイド開発者",
                react_developer: "React 開発者",
                nextjs_developer: "Next.JS 開発者",
                cs_student: "コンピューターの学生",
                oss_contributor: "OSSコントリビューター",
                linux_enthusiast: "Linux 愛好家",
                frontend_developer: "フロントエンド開発者",
              },
              subtitle: {
                text: "私は、革新的でユーザーフレンドリーなソリューションを構築するための情熱を持つソフトウェア開発者です。 様々なプログラミング言語や技術に精通しています。",
                and: "そして",
              },
            },
            buttons: {
              download_cv: "CVのダウンロード",
              github: "ギトハブ",
            },
            project: {
              title: "プロジェクト",
              description: "私が行ったプロジェクトの一部",
              show_more: "もっと表示",
            },
          },
          dashboard: {
            title: "ダッシュボード",
            description: "私、統計、言語などについて",
            cards: {
              headings: {
                languages_used: "フレームワーク/言語 使用条件",
                top_languages: "トップ言語",
                github_stats: "Githubの統計",
              },
            },
          },
          links: {
            title: "リンクス",
            description: "コンタクトとソーシャルリンク",
            contact_via_form: "またはフォームを使用して私に連絡してください",
            form_name: "お名前",
            form_email: "電子メール",
            form_message: "メッセージ",
            button: {
              send: "送信",
              send_success: "無事に送信できました！",
              send_failed: "送信できませんでした!",
            },
          },
        },
      },
      fr: {
        translation: {
          header: {
            home: "Sommaire",
            dashboard: "Tableau de bord",
            links: "Liens",
          },
          home: {
            title: {
              introduction: "Bonjour, Je suis",
              headings: {
                web_designer: "Créateur Web",
                android_developer: "Android Développeur",
                react_developer: "React Développeur",
                nextjs_developer: "Next.JS Développeur",
                cs_student: "CS Étudiant",
                oss_contributor: "OSS contributeur",
                linux_enthusiast: "Enthousiaste Linux",
                frontend_developer: "Développeur Frontend",
              },
              subtitle: {
                text: "Je suis un développeur de logiciels passionné par la création de solutions innovantes et conviviales. Je suis qualifié dans une variété de langues et de technologies de programmation, y compris",
                and: "et",
              },
            },
            buttons: {
              download_cv: "Télécharger CV",
              github: "Github",
            },
            project: {
              title: "Projets",
              description: "Certains des projets que j'ai réalisés",
              show_more: "Afficher plus",
            },
          },
          dashboard: {
            title: "Tableau de bord",
            description: "À propos de moi, Statistiques, Langues, etc.",
            cards: {
              headings: {
                languages_used: "Cadres/langues Utilisé",
                top_languages: "Langues principales",
                github_stats: "Statistiques Github",
              },
            },
          },
          links: {
            title: "Liens",
            description: "Contact et liens sociaux",
            contact_via_form: "ou Contactez-moi par formulaire",
            form_name: "Nom",
            form_email: "Email",
            form_message: "Message",
            button: {
              send: "Envoyer",
              send_success: "Envoyer avec succès!",
              send_failed: "Impossible d'envoyer!",
            },
          },
        },
      },
      es: {
        translation: {
          header: {
            home: "Home",
            dashboard: "Dashboard",
            links: "Enlaces",
          },
          home: {
            title: {
              introduction: "Hola, Soy yo",
              headings: {
                web_designer: "Web Diseñador",
                android_developer: "Android Desarrollado",
                react_developer: "React Desarrollado",
                nextjs_developer: "Next.JS Desarrollado",
                cs_student: "CS Estudiante",
                oss_contributor: "OSS Contributor",
                linux_enthusiast: "Linux Enthusiast",
                frontend_developer: "Frontend Desarrollado",
              },
              subtitle: {
                text: "Soy un desarrollador de software con pasión por construir soluciones innovadoras y fáciles de usar. Soy experto en una variedad de idiomas y tecnologías de programación, incluyendo",
                and: "y",
              },
            },
            buttons: {
              download_cv: "Descargar CV",
              github: "Github",
            },
            project: {
              title: "Proyectos",
              description: "Algunos de los proyectos que he hecho",
              show_more: "Mostrar más",
            },
          },
          dashboard: {
            title: "Dashboard",
            description: "Sobre mí, Estadísticas, Idiomas, etc.",
            cards: {
              headings: {
                languages_used: "Marco/idiomas Usado",
                top_languages: "Idioma superior",
                github_stats: "Github Stats",
              },
            },
          },
          links: {
            title: "Enlaces",
            description: "Contacto y vínculos sociales",
            contact_via_form: "o Póngame en forma",
            form_name: "Nombre",
            form_email: "Email",
            form_message: "Mensaje",
            buttons: {
              send: "Enviar",
              send_success: "¡Envíen con éxito!",
              send_failed: "¡Fallo al enviar!",
            },
          },
        },
      },
      ar: {
        translation: {
          header: {
            home: "البيت",
            dashboard: "لوحة",
            links: "الروابط",
          },
          home: {
            title: {
              introduction: "مرحبا، أنا",
              headings: {
                web_designer: "مصمم الشبكة",
                android_developer: "الروبوت المطور",
                react_developer: "React المطور",
                nextjs_developer: "Next.JS المطور",
                cs_student: "طالب علوم الحاسوب",
                oss_contributor: "مساهم مفتوح المصدر",
                linux_enthusiast: "متحمس لينكس",
                frontend_developer: "مطور الواجهة الأمامية",
              },
              subtitle: {
                text: "أنا مطور برامج مع شغف لبناء حلول مبتكرة وسهلة الاستعمال. أنا ماهرة في مجموعة متنوعة من لغات وتكنولوجيات البرمجة، بما في ذلك",
                and: "و",
              },
            },
            buttons: {
              download_cv: "الحمولة CV",
              github: "Github",
            },
            project: {
              title: "المشاريع",
              description: "بعض المشاريع التي قمت بها",
              show_more: "أظهر المزيد",
            },
          },
          dashboard: {
            title: "لوحة",
            description: "عني، الإحصاءات، اللغات، إلخ.",
            cards: {
              headings: {
                languages_used: "الأطر/الأطر مستخدم",
                top_languages: "اللغة الرئيسية",
                github_stats: "إحصاءات غيثوب",
              },
            },
          },
          links: {
            title: "الروابط",
            description: "الاتصالات والوصلات الاجتماعية",
            contact_via_form: "أو اتصل بي عبر شكل",
            form_name: "الاسم",
            form_email: "Email",
            form_message: "الرسالة",
            button: {
              send: "إرسال",
              send_success: "أرسل بنجاح!",
              send_failed: "فشل في إرسال!",
            },
          },
        },
      },
      zh_cn: {
        translation: {
          header: {
            home: "内容",
            dashboard: "盘子",
            links: "链接",
          },
          home: {
            title: {
              introduction: "哈罗,我是",
              headings: {
                web_designer: "网络设计师",
                android_developer: "Android 开发者",
                react_developer: "React 开发者",
                nextjs_developer: "Next.JS 开发者",
                cs_student: "CS 学生",
                oss_contributor: "OSS 贡献者",
                linux_enthusiast: "Linux 定义",
                frontend_developer: "前端开发者",
              },
              subtitle: {
                text: "我是一个软件开发者,热衷于建立创新和方便用户的解决办法。 我精通各种编程语言和技术,包括",
                and: "和",
              },
            },
            buttons: {
              download_cv: "下载 CV",
              github: "吉图布",
            },
            project: {
              title: "项目",
              description: "我做了一些计划",
              show_more: "显示更多",
            },
          },
          dashboard: {
            title: "盘子",
            description: "关于我,统计学,语言学等等.",
            cards: {
              headings: {
                languages_used: "框架/语言 已使用",
                top_languages: "顶端语言",
                github_stats: "Github 统计",
              },
            },
          },
          links: {
            title: "链接",
            description: "联系和社会联系",
            contact_via_form: "或者通过表格联系我",
            form_name: "名称",
            form_email: "电子邮件",
            form_message: "消息",
            button: {
              send: "发送",
              send_success: "发送成功!",
              send_fail: "发送失败!",
            },
          },
        },
      },
    },
  });

export default i18n;
